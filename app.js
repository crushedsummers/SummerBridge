/*MAIN MENU*/
var icon = document.createElement("img");
icon.src = "assets/pre.jpg";
$(icon).css("border-radius", "20%");
$(icon).attr("id", "icon");

$(icon).on("mouseover", function(){
  $(icon).css("border-radius", "30%");
})

$(icon).on("mouseout", function(){
  $(icon).css("border-radius", "20%");
})

$(icon).on("mousedown", function(){
  $(this).css("box-shadow", "0px 0px");
  $(this).css("animation-play-state", "paused");
  $(this).css("transform", "scale(0.9)");
})

$(icon).on("mouseup", function(){
  $(this).css("box-shadow", "10px 10px");
  $(this).css("transform", "scale(1)");
  $(this).fadeOut("slow").queue(function() {
  /* Checklist: 
  √ button of bitlife icon at the center
  √ "Start Life" at the bottom
  */

    /*icons*/
    var portraitPhases = ["assets/baby.png", "assets/child.png", "assets/girl.png"];

    /*containers*/
    var divId = ["sideMenu", "mainText", "stats"];

    for (var i=0; i<2; i++){
      var box = document.createElement("span");
      $(box).attr("id", (divId[i]));
      $(box).attr("class", "playy");
      $("#inGame").append(box);
    }

    /*MAIN PAGE*/


    /* Checklist:
    - description
    - prompts may often come up
    - go through it in 6 months!!!!!! only aft elementary thou cuz i rmb it more
    */

    /*SIDE MENU*/
    const name = "Raphaele Guillemot";
    var currentAge = 0;
    var currentPortrait = 0;
    var status = ["Infant", "Student"];
    var statusSrc = ["assets/babyIcon", "assets/studentIcon"];

    //portrait
    var portrait = document.createElement("img");
    portrait.src = portraitPhases[currentPortrait];
    $(portrait).attr("id", "portrait");
    $(portrait).attr("class", "sideElements");
    $("#sideMenu").append(portrait);
    //name
    var text = document.createElement("h2");
    $(text).attr("id", "name");
    $(text).attr("class", "sideElements");
    $(text).html(name);
    $("#sideMenu").append(text);
    //ethnicity
    var flag = document.createElement("img");
    flag.src = "assets/flag.png";
    $(flag).attr("id", "ethnicity");
    $(flag).attr("class", "sideElements");
    $("#sideMenu").append(flag);
    //age up!
    var levelUp = document.createElement("img");
    levelUp.src = "assets/age+.png";
    $(levelUp).attr("id", "levelUp");
    $(levelUp).attr("class", "sideElements");
    $(levelUp).click(function() {
      if (currentAge != 16) {
        currentAge += 1;
        $("#location").html(currentAge+" Years Old");
        console.log(currentAge);
      }
      else {
        console.log("!!! reached end!");
        //THE END SEQUENCE
      }
    });
    $("#sideMenu").append(levelUp);

    
    /* Checklist:
    √ name
    √ ethnicity
    - activities 
      - indicates own choices/interests, list them up like the application!!
    √ ability to level up one year!
      √ stop at 16
      > create end sequence!
    */

    /*STATS*/

    /*Checklist:
    - happiness
    - health
    - smarts
    - looks (always low LOL)
    */
  });
});

$("#inGame").append(icon);
//var clicc = document.createElement("audio");
//$(clicc).src = "http://freesound.org/data/previews/399/399934_1676145-lq.mp3";
//$(clicc).play();
//}
