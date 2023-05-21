enemiesMade = 0;


function updatePlayerData(){
  
  
let dataToShow = "ENEMIES MADE: "+ enemiesMade;

//io.writeIntoElement = function(value, id){
//     document.getElementById(id).innerHTML = value;
// }
//io.writeIntoElement(dataToShow,"playerData")
$("#playerData").html(dataToShow);
}