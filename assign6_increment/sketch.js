w= 400;
rows = 1;
circleD = w/rows;
circles = [];
cReset = false;
game_end = false;

var clicked = 0;
var multipliedClicks = 0;

function setup() {
  var myCanvas = createCanvas(w, w);
    myCanvas.parent("#minigame");
  
  get_circle_centers();
}

function draw() {
  background(0);
  noStroke();
  
  if(game_end == false){
    for (let i = 0; i < circles.length; i++) {
    fill(circles[i].cColor, 0, 0)
    circle(circles[i].x, circles[i].y, circleD)
  }
  }else{
    fill(155);
    textSize(20);
    text("There are no more fires to put out.", 48, 200);
  }

    
}

function mouseClicked(){
  increaseRows();
  checkEnd();
  redrawCircles();
  
  //console.log('Clicked:', clicked, 'MultipliedClicks', multipliedClicks)
}



function get_circle_centers(){
  circles = [];
  for (let i = 0; i < rows; i++) {
    xPos = i*circleD;
    for (let j = 0; j < rows; j++) {
      yPos = j*circleD;
        circleCenter = {x : xPos+(circleD/2), y: yPos+(circleD/2), cColor: 255};
        circles.push(circleCenter);
    }
  }
}

function redrawCircles(){
   for (let i=0; i < circles.length; i++){
    circleX = circles[i].x;
    circleY = circles[i].y;
    mouse_dist = dist(mouseX, mouseY, circleX, circleY);
    if ( mouse_dist < circleD/2 ){
      if ($('#panel3').is(":visible")){
        clicked += 1;
      }
      circles[i].cColor -= 17;
      circle(circleX, circleY, circleD);
    }
  }
}

function check_colors(){
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].cColor >= 0){
      return false;
    }
  }
  return true;
}

function increaseRows(){
  cReset = check_colors();
  if (cReset == true){
      rows += 1
      circleD = w/rows;
      get_circle_centers()
      cReset = false;
    }
}

function randomIncrease(){
  ranNum = floor(random(0, circles.length));
  circles[ranNum].cColor -= 5
}

function multiplyClick(){
  increaseRows();
  checkEnd();
  i = 0;
  while (i < 50){
    randomIncrease();
    i++;
  }
  multipliedClicks += 1;
  
  redrawCircles();
  //console.log('Clicked:', clicked, 'MultipliedClicks', multipliedClicks)
}

function multiplyClicks(){
  increaseRows();
  checkEnd();
  i = 0;
  while (i < 250){
    randomIncrease();
    i++;
  }
  multipliedClicks += 1;
  redrawCircles();
  //console.log('Clicked:', clicked, 'MultipliedClicks', multipliedClicks)
}

function checkEnd(){
  if (rows >= 25){
    game_end = true;
  }
}