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
  var divId = ["sideMenu", "mainText", "stats", "storyDiv", "emailsDiv", "achieveDiv"];
  for (var i=0; i<3; i++){
    var box = $("<div>");
    $(box).attr("id", (divId[i]));
    $(box).attr("class", "playy");
    $("#inGame").append(box);
  }
  for (var i=4;i<divId.length;i++){
    var box = $("<div>");
    $(box).attr("id", (divId[i]));
    $(box).attr("class", "mainPage");
  }
  var box = $("<div>");
  $(box).attr("id", "sideContainer");
  $("#sideMenu").append(box);

  //storyDiv should be FIRST
  var box = $("<div>");
    $(box).attr("id", "storyDiv");
    $(box).attr("class", "mainPage");
  $("#mainText").append(box);

/*SIDE MENU*/
  const name = "NAME";
  var currentAge = (-1);
  var currentPortrait = 0;
  var status = ["Infant", "Student"];
  var statusSrc = ["assets/babyIcon", "assets/studentIcon"];
  $("#location").html(currentAge+" Years Old");

  //portrait
  var portrait = $("<img>");
  $(portrait).attr("src", portraitPhases[currentPortrait]);
  $(portrait).attr("id", "portrait");
  $("#sideMenu").append(portrait);
  //name
  var text = $("<h2>");
  $(text).attr("id", "name");
  $(text).html(name);
  $("#sideMenu").append(text);
  //ethnicity
  var flag = $("<img>");
  $(flag).attr("src", "assets/france.png");
  $(flag).attr("id", "ethnicity");
  $("#sideMenu").append(flag);
  //ARROW
  var arrowContainer = $("<div>");
  $(arrowContainer).attr("id", "arrowContainer");
  var arrow = $("<div>");
  $(arrow).attr("id", "arrow");
  $(arrowContainer).append(arrow);
  
/*BUTTONS*/
    //switching main pages
  function switchPages() {
    //save previous texts
    var prevPage = $("#mainText").html();

    //check which icons are appended = the current page is the one not
    var currentPageIcon = $(".mainPageVisibility").attr("id");
    var currentPage = currentPageIcon+"Div";
    //$(this) == icon clicked
    var desiredPageIcon = $(this).attr("id");
    var desiredPage = desiredPageIcon+"Div";
    
    if (!(currentPageIcon == desiredPageIcon)){
    //de-ppend icon clicked and append icon deppended
    $("#"+desiredPageIcon).addClass("mainPageVisibility");
    //the icon clicked will disappear
    $("#"+currentPageIcon).removeClass("mainPageVisibility");
    //the icon you're on will appear
    
    $("#mainText").html(" ");
    //the page you are on will disappear

    $("#mainText").append($("#"+desiredPage));
    //the page you want to go will appear

    //re-append click function
    $(".sideElements").on("click", switchPages);
    }
  }

  //email
  var eMail = $("<img>").on("click", switchPages);
  $(eMail).attr("src","assets/email.png");
  $(eMail).attr("id", "email");
  $(eMail).attr("class", "sideElements");

  //achievements
  var achieve = $("<img>").on("click", switchPages);
  $(achieve).attr("src","assets/achievements.png");
  $(achieve).attr("id", "achieve");
  $(achieve).attr("class", "sideElements");

  //back to story
  var story = $("<img>").on("click", switchPages);
  $(story).attr("src","assets/story.png");
  $(story).attr("id", "story");
  $(story).attr("class", "sideElements mainPageVisibility");
  $("#sideContainer").append(story);

  //age up!
  var levelUp = $("<img>");
  $(levelUp).attr("src","assets/age+.png");
  $(levelUp).attr("id", "levelUp");
  //$(levelUp).attr("class", "sideElements");

  //when one age up:
  $(levelUp).click(function() {
    //doesn't get over 16yrs old
    if (currentAge != 16) {
      currentAge += 1;
      //change the words on top
      $("#location").html(currentAge+" Years Old");
      console.log(currentAge);

      //first email arrives at age 4
      if (currentAge >= 4) {
        //var emailage = "age"+currentAge+"Email";
        $("#sideContainer").append(eMail);
      }

      //first achievement arrives at age 12
      if (currentAge >= 12) {
        //var nameage = "age"+currentAge+"Achieve";
        $("#sideContainer").append(achieve);
      }

      //INCOMING! LOAD OF WASTED SPACE!

      //what happens at age 0
      //PROBLEM: UNABLE TO APPEND AT VERY START OF GAME, FOR NOW, AGE = -1
      if (currentAge == 0){
        //SPECIAL: hide age up button, until proceed to month 2 
        $("#levelUp").css("display", "none");

        for (var i=0;i < age0.length;i++){
          $("#storyDiv").append(age0[i]);
        }

        //continue => 2 months old
        $(arrowContainer).on("click", function() {
          $(this).css("display", "none");
          $(flag).attr("src", "assets/dubai.jpg");
          for (var i=0;i < agemonth2.length;i++){
            $("#storyDiv").append(agemonth2[i]);
          }
          $("#levelUp").css("display", "block");
          $(arrowContainer).off("click");
        });  

        $("#sideContainer").append(arrowContainer);
      } 

      //what happens at age 1
      else if (currentAge >= 1){
        console.log("YO!");
        for (var i=0;i < age1.length;i++){
          $("#storyDiv").append(age1[i]);
        }
      } 

      //what happens at age 2
      else if (currentAge >= 2){
        console.log("YO!");
        for (var i=0;i < age2.length;i++){
          $("#storyDiv").append(age2[i]);
        }
      } 

      //what happens at age 3
      else if (currentAge >= 3){
        for (var i=0;i < age3.length;i++){
          $("#storyDiv").append(age3[i]);
        }
        $(flag).attr("src", "assets/france.png");
      } 

      //what happens at age 4
      else if (currentAge >= 4){
        $(flag).attr("src", "assets/ireland.png");
        for (var i=0;i < age4.length;i++){
          $("#storyDiv").append(age4[i]);
        }
        for (var i=0;i < age4Email.length;i++){
          $("#emailDiv").append(age4Email[i])
        }
      }

      //what happens at age 5
      else if (currentAge >= 5){
        //change portrait
        currentPortrait = 1;
        $(portrait).attr("src", portraitPhases[currentPortrait]);

        //dialouge
        for (var i=0;i < age5.length;i++){
          $("#storyDiv").append(age5[i]);
        }
      } 

      //what happens at age 6
      else if (currentAge >= 6){
        $(flag).attr("src", "assets/hongkong.png");
        for (var i=0;i < age6.length;i++){
          $("#storyDiv").append(age6[i]);
        }
      }

      //what happens at age 7
      else if (currentAge >= 7){
        for (var i=0;i < age7.length;i++){
          $("#storyDiv").append(age7[i]);
        }
        for (var i=0;i < age7Email.length;i++){
          $("#emailDiv").append(age7Email[i])
        }
      }

      //what happens at age 8
      else if (currentAge >= 8) {
        for (var i=0;i < age8.length;i++){
          $("#storyDiv").append(age8[i]);
          //SPECIAL: hide age up button, until one clicks on a decision 
          $("#levelUp").css("display", "none");

          $(".decision").click(function(){
            var chosenDecision = $(this).attr("id");
            console.log(chosenDecision);
            //the id MUST == name of array
            for (var i=0;i < offerDialouge.length;i++){
              $("#storyDiv").append(offerDialouge[i]);
              $("#levelUp").css("display", "block");
              $(".decision").removeClass("decision");
              console.log("decision chosen!");
            }
          });
        }
      }
      //what happens at age 9
      else if (currentAge >= 9){
        for (var i=0;i < age7.length;i++){
          $("#storyDiv").append(age7[i]);
        }
      }
      //what happens at age 11
      else if (currentAge >= 11){
        //change portrait
        currentPortrait = 2;
        $(portrait).attr("src", portraitPhases[currentPortrait]);

        //dialouge
        for (var i=0;i < age11.length;i++){
          $("#storyDiv").append(age11[i]);
        }
      }
      //what happens at age 12
      else if (currentAge >= 12){
        for (var i=0;i < age12.length;i++){
          $("#storyDiv").append(age12[i]);
        }
        for (var i=0;i < age12Email.length;i++){
          $("#emailDiv").append(age12Email[i])
        }
        $(".decision").click(function(){
          //the id MUST == name of array
          for (var i=0;i < HMReply.length;i++){
            $("#emailDiv").append(HMReply[i]);
            $(".decision").removeClass("decision");
            console.log("decision chosen!");
          }
        });
      }
      //what happens at age 13
      else if (currentAge >= 13){
        for (var i=0;i < age13.length;i++){
          $("#storyDiv").append(age13[i]);
        }
        for (var i=0;i < age13Email.length;i++){
          $("#emailDiv").append(age13Email[i])
        }
      }
      //what happens at age 14
      else if (currentAge >= 14){
        for (var i=0;i < age14.length;i++){
          $("#storyDiv").append(age14[i]);
        }
        for (var i=0;i < age14Email.length;i++){
          $("#emailDiv").append(age14Email[i])
        }

        //SPECIAL: hide age up button, until one clicks on arrow
        $("#levelUp").css("display", "none");
        //continue => 14 yrs old oopsies
        $(arrowContainer).on("click", function() {
          console.log("hey");
          $(this).css("display", "none");

          for (var i=0;i < age14Cont.length;i++){
            $("#storyDiv").append(age14Cont[i]);
          }
          for (var i=0;i < age14EmailCont.length;i++){
            $("#emailDiv").append(age14EmailCont[i])
          }

          $("#levelUp").css("display", "block");
        });  

        $(arrowContainer).css("display", "block");
      }
      //what happens at age 15
      else if (currentAge >= 15){
        for (var i=0;i < age15.length;i++){
          $("#storyDiv").append(age15[i]);
        }
      }
      //what happens at age 16
      else if (currentAge >= 16){
        for (var i=0;i < age16.length;i++){
          $("#storyDiv").append(age16[i]);
        }
      }
    //exiting out of age boundary  
    } 
    else {
      console.log("!!! reached end!");
      //THE END SEQUENCE
    }
  });
  $("#sideContainer").append(levelUp);


/*MAIN PAGE*/
/*STORY*/
  //contents of age 0 (2002)
  var age0 = [
    $("<p><strong>Age: 0 years</strong></p>"),
    $("<p>The life you will be observing is that of a female named Raphaele Guillemot.</p>"),
    $("<p>She was born in Cain, France.</p>"),
    $("<p>Her Mother is named C.Kuan. She's from Hong Kong.</p>"),
    $("<p>Her Father is named Y.Guillemot. He's from France.</p>")
  ];

  //contents of age 2 months
  var agemonth2 = [
    $("<p><strong>Age: 2 months</strong></p>"),
    $("<p>Raphaele's parents wants to start their new life in <i>Dubai</i>.</p>")
  ];

  //contents of age 1
  var age1 = [
   $("<p><strong>Age: 1 year</strong></p>")
  ];

  //contents of age 2 (2004)
  var age2 = [
    $("<p><strong>Age: 2 years</strong></p>")
  ];
 
  //contents of age 3
  var age3 = [
    $("<p><strong>Age: 3 years</strong></p>"),
    $("<p>After careful consideration from Raphaele's parents.</p>"),
    $("<p>They decided it was best to start Raphaele's education in her home place.</p>"),
    $("<p>The family immigrated back to live in <i>France</i>.</p>")
  ];

  //contents of age 4 (2006)
  var age4 = [
    $("<p><strong>Age: 4 years</strong></p>"),
    $("<p>Raphaele doesn't seem to be happy.</p>"),
    $("<p>After further consideration.</p>"),
    $("<p>The family immigrated to <i>Ireland</i> in hopes of putting more focus on English instead.</p>")
  ];

  //contents of age 5
  var age5 = [
    $("<p><strong>Age: 5 years</strong></p>")
  ];

  //contents of age 6 (2008)
  var age6 = [
    $("<p><strong>Age: 6 years</strong></p>"),
    $("<p>Raphaele has finsihed kindergarten.</p>"),
    $("<p>Life seemed dull in Ireland, so Raphaele and her family immigrated to <i>Hong Kong</i>.</p>"),
    $("<p>She's now living with her grandmother.</p>")
  ];

  //contents of age 7
  var age7 = [
    $("<p><strong>Age: 7 years</strong></p>"),
  ];

  //contents of age 8 (2010)
  var age8 = [
    $("<p><strong>Age: 8 years</strong></p>"),
    $("<p>It's DEAR time, you went to the library corner and picked a random book.</p>"),
    //theSoundofColors, 
    $("<p>You notice a girl looking at the book.</p>"), 
    $("<p>What do you do?</p>"), 
    $("<p>Give the book to her and look for another one?</p>").attr("id", "giveUpDialouge").attr("class", "decision"),
    $("<p>Ignore the girl and continue reading?</p>").attr("id", "ignoreDialouge").attr("class", "decision"),
    $("<p>Offer to read together?</p>").attr("id", "offerDialouge").attr("class", "decision"),
  ];
  //age 8 option giveUp
  var giveUpDialouge = [
    $("<p>You didn't want to create any problems so you hand the book to the girl.</p>"),
    $("<p>She hesitates.</p>"),
    $("<p>She offers to read with you.</p>"),
    $("<p>Again, you didn't want to create and problems, so you reluctantly agree.</p>"),
    $("<p>Raphaele met her best friend M.Tam!</p>")
  ];
  //age 8 option ignore
  var ignoreDialouge = [
    $("<p>You didn't feel comfortable with people, so you tried to ignore her.</p>"),
    $("<p>She eventually approaches you.</p>"),
    $("<p>She offers to read with you.</p>"),
    $("<p>You didn't want to create and problems, so you reluctantly agree.</p>"),
    $("<p>Raphaele met her best friend M.Tam!</p>")
  ];
  //age 8 option offer
  var offerDialouge = [
    $("<p>You know that you can't easily make friends due to the language barrier.</p>"),
    $("<p>But this was a good opportunity.</p>"),
    $("<p>You offer to read together.</p>"),
    $("<p>She accepts.</p>"),
    $("<p>Raphaele met her best friend M.Tam!</p>")
  ];

  //contents of age 9 //year 3-4
  var age9 = [
    $("<p><strong>Age: 9 years</strong></p>"),
    $("<p>She has shown an interest in games through Youtube.</p>")
  ];

  //contents of age 10 (2012)
  var age10 = [
    $("<p><strong>Age: 10 years</strong></p>"),
    $("<p>Raphaele's new sister Gabriele Guillemot was born.</p>"),
    $("<p>They have a 9 age gap.</p>")
  ];

  //contents of age 11
  var age11 = [
    $("<p><strong>Age: 11 years</strong></p>"),
    $("<p>She has shown an interest in art.</p>")
  ];

  //contents of age 12 (2014)//started tumblr
  var age12 = [
    $("<p><strong>Age: 12 years</strong></p>"),
    $("<p>Raphaele has started grade 6, which is considered secondary in her school.</p>"),
    $("<p>Little does she know, She has also finally contributed to her first fandom by making a tumblr blog of her Original Character (OC).</p>"),
    $("<a href='http://askfluttershine-blog.tumblr.com/page/19'>She's proud of her work as it's currently running smoothly with 20 Followers.</a>")
  ];
  
  //contents of age 13
  var age13 = [
    $("<p><strong>Age: 13 years</strong></p>"),
    $("<p>She has started taking art more seriously as a hobby, obtaining a <i>tablet</i>!</p>"),
    $("<a href='http://ask-usa-pony.tumblr.com/page/51'>With the support of about 100 Followers, She became more active with Tumblr, creating an innovative idea of combining a country with a character. It was very successful.</a>"),
    $("<p>Her interest in Youtube and games gave her an opportunity to also take an interest in video editing, picking up on <i>Adobe After Effects</i>.</p>"),
    $("<br>"),
    $("<p>Raphaele has shown struggles in her academic life</p>")
  ];
  
  //contents of age 14 (2016)
  var age14 = [
  $("<p><strong>Age: 14 years</strong></p>"),
  $("<a href='http://ask-usa-pony.tumblr.com/post/127151806575/oh-what-to-do'>The country character blog has gained the impossible of 3K Followers in the span of a year.</a>"),
  $("<p>This brought Raphaele immense happiness and power, perhaps also distraction and detachment.</p>"),
  $("<p>Continuing her interest in art, she has started participating in the newspaper club with her current digital art knowledge.</p>"),
  $("<p>She has also decided to reach further skill development by joining an 'Creative Multi-media Illustration' Course.</p>"),
  $("<p>Noting that she is immensely younger than the other students, she has learnt a variety of skills and mediums with professional help, as well as how the art world works.</p>"),
  ];
  var age14Cont = [
  $("<p>She was caught cheating in a Math test.</p>"),
  $("<p>She was sent to the principals office along with her accomplice.</p>"),
  $("<p>Regarding her Criterion D score in Drama, they also noted her inactivity in academics.</p>"),
  $("<br>"),
  $("<p>As a result, not only does she gain more support from her parents and school.</p>"),
  $("<a href='http://ask-usa-pony.tumblr.com/post/164356282060/still-screaming-while-i-make-this-post-more#disqus_thread'> Raphaele also put an official end on Tumblr to focus more on her schoolwork.</a>")
  ];
  
  //contents of age 15
  var age15 = [
  $("<p><strong>Age: 15 years</strong></p>"),
  $("<p>Raphaele has become more active in the school body</p>"),
  $("<p>She's participating more in CAS Clubs related to her specialty: Art, learning how to master different mediums.</p>"),
  $("<p>With her knowledge in Digital Arts, she has managed a Coffee Shop for the school event 'Family Fun Day' as the head of advertisement.</p>"),
  $("<p>She has also worked on bigger projects with the school newspaper, such as cover pages.</p>"),
  $("<p>To enhance her knowledge in animations, she dedicated her School Personal Project to Theraputic Animations as her topic.</p>"),
  $("<p>Finally putting effort and care into her life, Raphaele was recognised and awarded an Improvement Scholarship by the school.</p>"),
  ];

  //contents of age 16 (2018)
  var age16 = [
  $("<p><strong>Age: 16 years</strong></p>"),
  $("<p>Taking an interest in Debate, Raphaele participated in a HKU 'Critical Thinking' Course for Summer.</p>"),
  $("<p>With that knowledge, she developed a 'Casual Debate Club' with her friends.</p>"),
  $("<p>She also joined the Mock Trial Club to enhance her skills and knowledge in not only critical thinking, but public speaking.</p>"),
  
  $("<p>Recognising her interest in video editng, Raphaele finally decided to join the video productions club 'Campus TV'.</p>"),
  $("<p>She decided to broaden her video editing skills gained over the years and participated in a challenging video competition with her friends, ending up as part of the batch of Semi-Finalists out of 1500 videos (at most 4500 participants).</p>"),
  
  $("<p>Although seemingly late, She took an interest in Coding. She decided to taste coding through a summer programme.</p>"),
  $("<p>Confirming her interest, she continued her coding journey through learning basic Web Development in a Coding Course.</p>"),
  $("<p>Taking advantage of her coding interest and art knowledge, She made two visual novels with Python, using the aid of Renpy.</p>")
  
  ];

  //contents of END
  var END = [
  $("<p><strong>END</strong></p>"),
  $("<p>Editors note: Phew! This took a long time to finish but it was fun to go through my past bit by bit.</p>"),
  $("<p>I would like to say that nothing has been frabricated. Even the emails (though of course I needed to pick out the more significant things of said years.)</p>"),
  $("<p>I hope you enjoyed going through a small biography of my life!</p>")
  ];

  /* Checklist:
  √ description
  - prompts may often come up
  */

/*EMAILS*/
  var age4Email = [
    $("<p><strong>Commentaires de Prof</strong></p>"),
    $("<p>Elle a montré les signes de comportement introverti et le zézayer.</p>"),
  ];

  var age7Email = [
    $("<p><strong>老師的評論：</strong></p>"),
    $("<p>高子安遇到中文問題。 她已被轉移到幫助會議。</p>")
  ];

  var age12Email = [
    $("<br>"),
    $("<p><strong>Welcome to Livestream!</strong></p>"),
    $("<p>This email contains important information on your Livestream account. Please keep it for future reference.</p>"),

    $("<br>"),
    $("<p><strong>Homeroom Next Year</strong></p>"),
    $("<p>Hi Raphy,</p>"),
    $("<p>There is a chance (no guarantee) of change of HR next year and I wonder if you want to be in the same class as your friends. If yes, which homeroom you would prefer.</p>"),
    $("<p>Reply</p>").attr("class", "decision").attr("id", "HMReply"),
  ];
  var HMReply = [
  $("<hr>"),
  $("<p>Dear Ms. L,</p>"),
  $("<p>If it's pawsible (hah, puns) I would like to be in peace or joy, i can't chose >~<.</p>"),
  $("<hr>"),
  $("<p>Right, so either peace or joy, message passed to Mr Morrison. Let's wait and see.</p>")
  ];

  var age13Email = [
    $("<p><strong>Teacher's Comment:</strong></p>"),
    $("<p>Dear Parents,</p>"),
    $("<p>Raphaele was due to submit 2 projects in Science on Monday but neither were handed in. Unfortunately this will impact quite markedly on her overall assessment in this unit.</p>"),
    
    $("<br>"),
    $("<p><strong>Teacher's Comment:</strong></p>"),
    $("<p>Dear Parents,</p>"),
    $("<p>Just to inform you that there is an outstanding task of the T&F booklet. It was due in mid March and Raphaele still had not turned it her work.</p>"),
    $("<p>This will no doubt affect her achievement level on her T2 interim report if she does not hand it in before Wednesday 15 April.</p>"),

    $("<br>"),
    $("<p><strong>Counselling</strong></p>"),
    $("<p>Dear Parents,</p>"),
    $("<p>We have noticed that your child Raphaele G's academics are suffering and would like to request additional aid through our counselling programme.</p>"),
    $("<p>Accept</p>").attr("id", "counsellingResults").attr("class", "decision"),
    $("<p>Decline</p>").attr("id", "declineCounselling").attr("class", "decision"),
   ];
   var counsellingResults = [
    $("<p>She has been sent to see a counselor.</p>"),
    $("<p>She has been diagnosed with Social Anxiety Disorder.</p>"),
    $("<p>However, it was the only problem of confidence. Thanks to the support of the counsellor, She quickly recovered within a year.</p>")
    ];
    var declineCounselling = [
    $("<hr>"),
    $("<p>We understand and respect your decision.</p>")
    ];

  var age14Email = [
    $("<p><strong>Teacher's Comment:</strong></p>"),
    $("<p>Dear Students,</p>"),
    $("<p>You have not uploaded your critique and evaluation in to ManageBac for drama, despite having time during lesson.</p>"),
    $("<p>If this is not uploaded by Monday, you will receive a 0 for criterion D.</p>"),
    $("<br>"),
  ];
  var age14EmailCont = [
  $("<p><strong>Principal comment:</strong></p>"),
    $("<p>Dear Parents,</p>"),
    $("<p>We are extremely disappointed with not only Raphaele's actions, but also behaviour today as she didn't seem guilty of her actions.</p>"),
    $("<p>We'll not only be keeping a closer eye on Raphaele and her progress, but also assign a counsellor to help her.</p>"),
    $("<p>We believe that Raphaele needs to work on improving her attitude towards her the subject more than anything. Should she have been proactive towards her work and seek help constantly, it is likely for her to have achieve better results than how she did now. I hope Raphaele will work on that next year.</p>"),
  ];

/*ACHIEVEMENTS*/
  var age12Achieve = [
    $("<p>Practiced art skills for a year <mark>(Art+)</mark></p>"),
    $("<p>Managed a blog for a year (<mark>Leadership+)(Social skills+)</mark></p>")
  ];

  var age13Achieve = [
    $("<p>Practiced art skills for two years <mark>(Art+)</mark></p>"),
    $("<p>Managed blogs for two years <mark>(Leadership+)(Social skills+)</mark></p>"),
    $("<p>Practiced video editing skills for a years <mark>(Video Editing+)</mark></p>"),
  ];

  var age14Achieve = [
    $("<p>Practiced art skills for three years (Art+)</p>"),
    $("<p><small>Participated in the newspaper club 'the Victorian' for a year <mark>(Art++)</mark><small></p>"),
    $("<p><small>Boosted art skills in an 'Creative Multi-media Illustration' Course <mark>(Art+++)</mark> for a year <small></p>"),
    $("<br>"),
    $("<p>Managed blogs for three years <mark>(Leadership+)(Social skills+)</mark></p>"),
    $("<br>"),
    $("<p>Practiced video editing skills for two years <mark>(Video Editing+)</mark></p>"),
  ];

  var age15Achieve = [
    $("<p>Practiced art skills for four years <mark>(Art+)</mark></p>"),
    $("<p><small>Participated in the newspaper club 'the Victorian' for two years <mark>(Art++)</mark><small></p>"),
    $("<p><small>Participated in the sequential art club for a year <mark>(Art++)</mark><small></p>"),
    $("<p><small>Advanced participation in the 'Creative Multi-media Illustration' Course, total two years <mark>(Art+++)</mark><small></p>"),
    $("<br>"),
    $("<p>Managed a blog for three years <mark>(Leadership+)(Social skills+)</mark></p>"),
    $("<p>Managed a Coffee Shop for FFD as the head of advertisement <mark>(Art++)(Leadership++)(Social skills++)(Teamwork++)</mark></p>"),
    $("<br>"),
    $("<p>Practiced video editing skills for three years <mark>(Video Editing+)</mark></p>"),
    $("<p><small>Took an opportunity to animate using <i>Adobe After Effects</i> thrice <mark>(Video Editing++)</mark><small></p>"),
    $("<p><small>Dedicated self research and created products for her Personal Project <mark>(Video Editing++)</mark><small></p>"),
    $("<br>"),
    $("<p>Achieved an 'Improvement Scholarship' Award from the school</p>"),
  ];

  var age16Achieve = [
    $("<p>Practiced art skills for four years <mark>(Art+++)</mark></p>"),
    $("<p><small>Participated in the newspaper club 'the Victorian' for two years <mark>(Art++)</mark><small></p>"),
    $("<p><small>Participated in the sequential art club for a year <mark>(Art++)</mark><small></p>"),
    $("<p><small>Advanced participation in the 'Creative Multi-media Illustration' Course, total two years <mark>(Art+++)</mark><small></p>"),
    $("<br>"),
    $("<p>Managed a blog for three years <mark>(Leadership+)(Social skills+)</mark></p>"),
    $("<p>Managed a Coffee Shop for FFD as the head of advertisement for two years <mark>(Art++)(Leadership++)(Social skills++)(Teamwork++)</mark></p>"),
    $("<p>Effort in CCVC's Video Competition <mark>(Art++)(Video Editing+++)(Leadership+++)(Teamwork+++)</mark></p>"),
    $("<br>"),
    $("<p>Actively learnt the fundamentals of Critical Thinking through a HKU summer course <mark>(Debate++)</mark></p>"),
    $("<p><small>Started a CAS Club to promote Debate and Critical Thinking <mark>(Debate+)(Leadership+)(Teamwork++)</mark><small></p>"),
    $("<p><small>Joined a Mock Trial competition for one year, learning court systems <mark>(Debate+++)(Social skills++)(Teamwork++)</mark><small></p>"),
    $("<br>"),
    $("<p>Practiced video editing skills for three years <mark>(Video Editing+++)</mark></p>"),
    $("<p><small>Took an opportunity to animate using <i>Adobe After Effects</i> thrice <mark>(Video Editing++)</mark><small></p>"),
    $("<p><small>Participated in the school video productions club 'Campus TV' for a year <mark>(Video Editing++)(Leadership++)(Teamwork++)</mark><small></p>"),
    $("<br>"),
    $("<p>Learnt basic Web Development in an Coding Academy for a year <mark>(Coding+)</mark></p>"),
    $("<p><small>Participated in a C++ coding camp for summer <mark>(Coding+++)</mark><small></p>"),
    $("<p><small>Created two VNs in Python<mark>(Art++)(Coding++)(Leadership++)</mark><small></p>"),
    $("<p><small>Dedicated self research and created products for her Personal Project <mark>(Video Editing++)</mark><small></p>"),
    $("<br>"),
    $("<p>Achieved an 'Improvement Scholarship' Award from the school</p>"),
  ];
  });
//exiting out of click function of icon
});

//append icon, meaning append the start of the story, duuuunnnnnnn
$("#inGame").append(icon);

//var clicc = document.createElement("audio");
//$(clicc).src = "http://freesound.org/data/previews/399/399934_1676145-lq.mp3";
//$(clicc).play();
//}
