/*MAIN MENU*/

//icon
var icon = $("<img>");
$(icon).attr("src", "assets/pre.jpg");
$(icon).css("border-radius", "20%");
$(icon).attr("id", "icon");

//icon:hover
$(icon).on("mouseover", function(){
  $(icon).css("border-radius", "30%");
}) 
//icon:unhover
$(icon).on("mouseout", function(){
  $(icon).css("border-radius", "20%");
}) 
//icon pressed down
$(icon).on("mousedown", function(){
  $(this).css("box-shadow", "0px 0px");
  $(this).css("animation-play-state", "paused");
  $(this).css("transform", "scale(0.9)");
}) 
//icon pressed up == clicked on button
$(icon).on("mouseup", function(){
  $(this).css("box-shadow", "10px 10px");
  //animation shit
  $(this).css("transform", "scale(1)");
  $(this).fadeOut("slow").queue(function() {
  
/* Checklist: 
√ button of bitlife icon at the center
√ "Start Life" at the bottom
*/

/*CREATING LAYOUT*/
  //icons
  var portraitPhases = ["assets/baby.png", "assets/child.png", "assets/girl.png"];
  //containers
  var divId = ["sideMenu", "mainText", "stats"];
  for (var i=0; i<3; i++){
    var box = $("<div>");
    $(box).attr("id", (divId[i]));
    $(box).attr("class", "playy");
    $("#inGame").append(box);
  }

/*SIDE MENU*/
  const name = "Raphaele Guillemot";
  var currentAge = 0;
  var currentPortrait = 0;
  var status = ["Infant", "Student"];
  var statusSrc = ["assets/babyIcon", "assets/studentIcon"];
  $("#location").html(currentAge+" Years Old");

  //portrait
  var portrait = $("<img>");
  $(portrait).attr("src", portraitPhases[currentPortrait]);
  $(portrait).attr("id", "portrait");
  $(portrait).attr("class", "sideElements");
  $("#sideMenu").append(portrait);
  //name
  var text = $("<h2>");
  $(text).attr("id", "name");
  $(text).attr("class", "sideElements");
  $(text).html(name);
  $("#sideMenu").append(text);
  //ethnicity
  var flag = $("<img>");
  $(flag).attr("src", "assets/flag.png");
  $(flag).attr("id", "ethnicity");
  $(flag).attr("class", "sideElements");
  $("#sideMenu").append(flag);
  
  //age up!
  var levelUp = $("<img>");
  $(levelUp).attr("src","assets/age+.png");
  $(levelUp).attr("id", "levelUp");
  $(levelUp).attr("class", "sideElements");
  
  //when one age up:
  $(levelUp).click(function() {
    //doesn't get over 16yrs old
    if (currentAge != 16) {
      currentAge += 1;
      //change the words on top
      $("#location").html(currentAge+" Years Old");
      console.log(currentAge);

      //what happens at age 8 
      if (currentAge == 8) {
        for (var i=0;i < age8.length;i++){
          $("#mainText").append(age8[i]);
          //SPECIAL: hide age up button, until one clicks on a decision 
          $("#levelUp").css("opacity", "0");

          $(".decision").click(function(){
            var chosenDecision = $(this).attr("id");
            console.log(chosenDecision);
            //the id MUST == name of array
            for (var i=0;i < chosenDecision.length;i++){
            $("#mainText").append(chosenDecision[i]);
            $("#levelUp").css("opacity", "1");
            console.log("decision chosen!");
            }
          });

        }
      }

      //what happens at age 6
      if (currentAge == 6){
        //change portrait
        currentPortrait = 1;
        $(portrait).attr("src", portraitPhases[currentPortrait]);
      } 
      //what happens at age 11
      else if (currentAge == 11){
        //change portrait
        currentPortrait = 2;
        $(portrait).attr("src", portraitPhases[currentPortrait]);
      }
    //exiting out of age boundary  
    } 
    else {
      console.log("!!! reached end!");
      //THE END SEQUENCE
  }});
  $("#sideMenu").append(levelUp);

/*MAIN PAGE*/
  //(dumb way to make) variables
 var theSoundofColors = $("<img>");
 var firstDigital = $("<img>");
 var quitTumblr = $("<img>");
 $(theSoundofColors).attr("src", "assets/theSoundofColors.png");
 $(firstDigital).attr("src", "assets/fluttershine.png");
 $(quitTumblr).attr("src", "assets/quittingTumblr.jpg");

 // $("offerDialouge").attr("id", "offerDialouge");
 // $("offerDialouge").attr("class", "decision");
 //contents of offerDialouge
 var offerDialouge = [
  $("<p>You didn't want to create any problems so you hand the book to the girl</p>"),
  $("<p>She hesitates</p>"),
  $("<p>She offers to read with you</p>"),
  $("<p>Again, you didn't want to create and problems, so you reluctantly agree</p>"),
  ]
 
 var age8 = [
  //Age 8
  $("<p>It's DEAR time, you went to the library corner and picked a random book</p>").attr("id", "offerDialouge").attr("class", "decision"),
  $("<p>It's DEAR time, you went to the library corner and picked a random book</p>"),
  $("<p>It's DEAR time, you went to the library corner and picked a random book</p>"),
  $("<p>It's DEAR time, you went to the library corner and picked a random book</p>"),
  $("<p>It's DEAR time, you went to the library corner and picked a random book</p>"),
  $("<p>It's DEAR time, you went to the library corner and picked a random book</p>"),
  $("<p>It's DEAR time, you went to the library corner and picked a random book</p>"), //18
  //theSoundofColors, //19
  $("<p>You notice a girl looking at the book</p>"), //20
  $("<p>What do you do?</p>"), //21
  $("<p>Offer the book to her").attr("id", "offer"),
  // "Ignore".click(function(){
  //   "You didn't feel comfortable with people, so you tried to ignore her",
  //   "She eventually approaches you",
  //   "She offers to read with you",
  //   "You didn't want to create and problems, so you reluctantly agree",
  // }), //23
  // "Offer to read together".click(function(){
  //   "You know that you can't easily make friends due to the language barrier",
  //   "But this was a good opportunity",
  //   "You offer to read together",
  //   "She accepts",
  // }), //24

  //"Raphaele met her best friend M.Tam!",
  ];
  var ignore = [
  "You didn't feel comfortable with people, so you tried to ignore her",
  "She eventually approaches you",
  "She offers to read with you",
  "You didn't want to create and problems, so you reluctantly agree",
  "Raphaele met her best friend M.Tam!"
  ]
  /* Checklist:
  √ description
  - prompts may often come up
  */

  });
});

$("#inGame").append(icon);
//var clicc = document.createElement("audio");
//$(clicc).src = "http://freesound.org/data/previews/399/399934_1676145-lq.mp3";
//$(clicc).play();
//}
