var start = prompt("Welcome to my pop-up escape the room game! You play by following my instructions and typing your the answer. Start Game? <type and enter YES or NO>").toUpperCase();

var legitanswer = 0;

switch(start) {
  case 'YES':
    var intro = confirm("You woke up on the floor of a bathroom. You had a terrible headache. Sunlight shone out of a window above you to the left. You could tell it was some time around morning, and using the weak light from the window, you took hold of your bearings. <click OK>");
    
    var introptwo = confirm("You sat up looked around; You saw a toilet in front of you, a window (as mentioned before) on the wall above it. There was a sink on your right, with a mirror fastened to the wall above. There was a cabinet next to the sink. You saw bathtub without shower curtains to your left. You put your hand to the wall behind you to support yourself and notice a door to the left. <click OK>");
    //both will end the same way
    var lookforexit1 = prompt("Find a way out! Where do you want to look first? <type and enter: DOOR or WINDOW>").toUpperCase();
     	if(lookforexit1 === 'DOOR') {
          var lfe111 = confirm("The Door is locked. You won't be able to leave this way without the key. <click OK>");
          var lfe112 = confirm("You looked at the Window. <click OK>");
          var lfe11r = confirm("The Window is barred. Seems like you won't be leaving this way. <click OK>");
   	} else {
          var lfe121 = confirm("The Window is barred. Seems like you won't be leaving this way.<click OK>");
          var lfe122 = confirm("You tried the Door. <click OK>");
          var lfe12r = confirm("The Door is locked. You won't be able to leave this way without the key. <click OK>");
    }
    //both will end the same way. change this when able to
    var WhatNow = prompt("You're trapped! You felt an overwhelming sense of despair. You must decide what to do next. <type and enter LOOK AROUND or SULK>").toUpperCase();
     	if(WhatNow === 'LOOK AROUND') {
      	var WhatNowLAr = confirm("You stood up and took a deep breath. Sitting around and waiting for someone to save you simply wouldn't do! You felt a little better - perhaps it was your new-found resolve. 'Time for a little snooping around...,' you said under your breath.<click OK>"); 
   } else {
      var WhatNowSr = confirm("You sat agaist the wall, waiting for a miracle to happen. You felt the uneasiness inside of you growing stronger each passing moment. No longer able to ignore this feeling, you stood up and took a deep breath. Mustering up all the courage you had in you, you decided search the room for anything that might be of interest.<click OK>");
   }
    inventory = 0
    while(inventory != 5){
        var Look = prompt('Where would you like to look? <type and enter one of the following: BATHTUB, CABINET, DOOR, MIRROR, SINK, TOILET, WINDOW>').toUpperCase();
         switch(Look) {
           case 'BATHTUB':
             var Bi = confirm("You peered at the bathtub. It was empty save for a small rag on the ledge where people normally put their bar of soap. You turned on the tap, it didn't work. <click OK>");
             /*var rag = prompt("You pick up the rag, it might be of use to you. <type and enter TAKE>").toUpperCase(); 
                if(rag === TAKE){
                  var Rag = 1;
                  inventory++;
                }*/
           break;
           case 'CABINET':
             var Ci = confirm("You tried to open the cabinet doors, which you assumed was used to hold toiletries. Seems like it's locked. The fact was confirmed when you examined the door of the cabinet; there was a small keyhole beneath one of the two knobs. <click OK>");
             //var Cdoor = 
           break;
           case 'DOOR':
             var Di = confirm("It's locked. You have to find the key. <click OK>");
           break;
           case 'MIRROR':
             var Mi = confirm("It's screwed to the wall. <click OK>");
             var Ma = prompt("Do you have anything you can use to unscrew it? <type and enter your answer>").toUpperCase();
               /*if (COINS === 1 | Ma === COINS){
                 var Munscrew = confirm ("You removed the Mirror and found a Small Dirty Key <click OK>");
                 COINS--;
                 var DirtySmallKey = 1;
             } else {
               var Mwrong = confirm("That won't work. Try again! <click OK to return to 'Where would you like to look?'>");
             }*/
           break;
           case 'SINK':
             var Si = confirm ("");
           break;
           case 'TOILET':
             var Ti = confirm ("");
           break;
           case 'WINDOW':
             var Wi = confirm ("The Window is barred. No use wasting time here.");
           break;
           default:
             alert("Your headache seems to be impairing your speech. Try again.");
         }
        }
    
break;
      
  case 'NO':
    var quit = confirm("You quit the game.");
  break;
  
  default:
    alert("Your headache seems to be impairing your speech. Try again.");
}