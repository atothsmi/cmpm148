let resources = [
  {key: "apple", value: 50,image: "./images/icons/shiny-apple.svg", },
  {key: "graduate", value: 50, image: "./images/icons/graduate-cap.svg"},
  {key: "heart", value: 50, image: "./images/icons/heart-organ.svg"},
  {key: "wallet", value: 50, image: "./images/icons/wallet.svg"}
]
//graduate cannot go below 20
function addResource(key, amount){
  for (x in resources){
    if (key == resources[x].key) resources[x].value += amount;
  }
  
}


function setStatIcons () {
  let resource_bar = ""
  
  for (x in resources) {
    resource_bar += "<div class='statIconImageContainer'><div class='resourceBarFront' id='" + resources[x].key + "Bar'></div><div class='resourceBarBack'></div><image src='" + resources[x].image +"'class='statIconImage' id='" + resources[x].key +  "'> </image></div>"
  }

  //io.appendIntoElement(resource_bar, "statIcons")
  // io.appendIntoElement = function(value, id){
  //   document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + value;
  // }
  $('#statIcons').append(resource_bar)
} 

function updateMeters() {
    for (x in resources) {
      //console.log(resources[x].key+"Bar", resources[x].value/100*75)
      document.getElementById(resources[x].key+"Bar").style.transform = "scaleY(" + resources[x].value/100 + ")";
      //console.log(resources[x].value/100*75+ "px", )
  }
  
}

checkTransit = 0;
function checkFail() {
  failures = []
    for (x in resources) {
      if (resources[x].value >= 100) {failures.push({resource: resources[x].key, level: "high"})}
      if (resources[x].value <= 0) {failures.push({rsource: resources[x].key, level: "low"})}
  }
   //console.log(failures)
  for (x in failures){
    checkTransit += 1;
    let f = failures[x];
    for ( i in failCards){
      let failCard = failCards[i];
      if (failCard.resource === f.resource && failCard.level === f.level){
        addToTopDeck(failCard.card, false);
      }else{
        //addToTopDeck(defaultFailCard, false);
    }
    }
    console.log(checkTransit)
    if (checkTransit % 2 != 0){
      addToTopDeck(failTransit, false);
    }
    

    
  }
 
}

// test_array = [];
// for (i in resources){
//   test_array.push(resources[i])
// }
// test_array.sort(function(a, b){return b.value - a.value})
// console.log(test_array);