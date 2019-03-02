var currentlocation = [];
var currentdesc = [];
var descno = 5;
var locationno = 0;
var ingame = document.getElementById("in-game");

/* stats */
var bg = "grey"
var time = 16;

/*subdesc*/
for(i = 0; i < 5; i++){ 
	var subDesc = document.createElement("h4");
  subDesc.classList.add("desc");
  subDesc.style.color = "#d3d3d3";
  subDesc.style.fontSize = "20px";
  subDesc.style.backgroundColor = "grey";
  ingame.appendChild(subDesc);
} 
 
currentlocation[0] = "ABANDONED ROOM"; {
  currentdesc[0] = " ";
  currentdesc[1] = " ";
  currentdesc[2] = " ";
  currentdesc[3] = " ";
  currentdesc[4] = " ";
  currentdesc[5] = "..."; 
  currentdesc[6] = "You wake up in a room greeted with grey, it appears as if you are in an abandoned room";
  currentdesc[7] = "You stand up and adjust your eyes to feel your surroundings, and notice numerous items scattered across the floor aside from the spot you were lying on mere moments ago.";
  currentdesc[8] = "However you are unable to examine your area easily due to the lack of light.";
  currentdesc[9] = "It is getting dark soon";
  currentdesc[10] = "You notice 2 doors and a window, one door facing in front of you, another to your left, and the window on your right.";
  currentdesc[11] = "There is something on your wrist, It is a watch. It says: " + time + " ...It seems like your clothes are all scattered too.";
  currentdesc[12] = "...";
  currentdesc[13] = "You see a bubblewrap piece";
  currentdesc[14] = "Will you pop it?";
  currentdesc[15] = "...";
  currentdesc[16] = "...";  
  currentdesc[17] = "Dammit you didn't fall for the bait, Thanks for playing!";
}

  

//start
 
ingame.style.backgroundColor = bg //current bg color

ingame.onclick = function() {
  var location = document.getElementById("location");
  var desc = document.getElementsByClassName("desc");
  
  location.innerHTML= currentlocation[locationno];
 
  for(i = 0; i < 5; i++){ 
	  desc[i].innerHTML = currentdesc[descno - i];
  }
  
  if(descno == 13) {
    var popSound = document.createElement("audio");
    popSound.src = "http://bit.ly/AX202_PopSound";
    
    var newBubble = document.createElement("img");
	  newBubble.src = "http://bit.ly/AX202_UnPop";
	  newBubble.onclick = pop; 

      function pop(){
        if(event.target.src != "http://bit.ly/AX202_Pop"){
          currentdesc[17] = "Nyahahhaha, you popped the bubble, Thanks for playing!";
          popSound.play();
	         }
      
	event.target.src = "http://bit.ly/AX202_Pop";
}
    
document.getElementById("in-game").appendChild(newBubble);
}
  
  if (descno != 17) {
    descno += 1; 
    
      var clicc = document.createElement("audio");
      clicc.src = "http://freesound.org/data/previews/399/399934_1676145-lq.mp3";
      clicc.play();
  }
}