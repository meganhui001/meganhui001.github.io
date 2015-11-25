var start = prompt("Welcome to my pop-up escape the room game! You play by following my instructions and typing your the answer. Start Game? <type and enter YES or NO>").toUpperCase();

var legitanswer = 0;

switch (start) {
  case 'YES':
    var intro = confirm("You woke up on the floor of a bathroom. You had a terrible headache. Sunlight shone out of a window above you to the left. You could tell it was some time around morning, and using the weak light from the window, you took hold of your bearings. <click OK>");

    var introptwo = confirm("You sat up looked around; You saw a toilet in front of you, a window (as mentioned before) on the wall above it. There was a sink on your right, with a mirror fastened to the wall above. There was a cabinet next to the sink. You saw bathtub without shower curtains to your left. You put your hand to the wall behind you to support yourself and notice a door to the left. <click OK>");
    //both will end the same way
    var lookforexit1 = prompt("Find a way out! Where do you want to look first? <type and enter: DOOR or WINDOW>").toUpperCase();
    if (lookforexit1 === 'DOOR') {
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
    if (WhatNow === 'LOOK AROUND') {
      var WhatNowLAr = confirm("You stood up and took a deep breath. Sitting around and waiting for someone to save you simply wouldn't do! You felt a little better - perhaps it was your new-found resolve. 'Time for a little snooping around...,' you said under your breath.<click OK>");
    } else {
      var WhatNowSr = confirm("You sat agaist the wall, waiting for a miracle to happen. You felt the uneasiness inside of you growing stronger each passing moment. No longer able to ignore this feeling, you stood up and took a deep breath. Mustering up all the courage you had in you, you decided search the room for anything that might be of interest.<click OK>");
    }
    //inventory variables
    var CKEY = 0; //Name: CABINET DOOR KEY
    var COINS = 0; //Name: COINS
    var DKEY = 0; //Name: DOOR KEY
    do {
      var Look = prompt('Where would you like to look? <type and enter one of the following: BATHTUB, CABINET, DOOR, MIRROR, SINK, TOILET, WINDOW>').toUpperCase();
      switch (Look) {
        case 'BATHTUB':
          var Bi = confirm("You peered at the bathtub. It was empty save for a small rag on the ledge where people normally put their bar of soap. You turned on the tap, it didn't work. <click OK>");
          break; //bathtub break
        case 'CABINET':
          var Ci = confirm("You tried to open the cabinet doors, which you assumed was used to hold toiletries. Seems like it's locked. The fact was confirmed when you examined the door of the cabinet; there was a small keyhole beneath one of the two knobs. <click OK>");
          if (CKEY === 1) { //first if
            var Ca = prompt("Do you have anything you can use to unlock it? <type and enter the NAME of a RECIEVED ITEM FROM YOUR INVENTORY>").toUpperCase();
            if (Ca === 'CABINET DOOR KEY') { //second if
              CKEY--
              var Copened = prompt("You found the key to the door inside the cabinet. <type and enter TAKE to add to inventory>").toUpperCase;
              DKEY++
            } else { //second if end, else start
              var Cwrong = confirm("That didn't do anything. Try again. <click OK>");
            } //else end
          } //first if end
          break; //cabinet break
        case 'DOOR':
          var Di = confirm("It's locked. You have to find the key. <click OK>");
          break; //Door break
        case 'MIRROR':
          var Mi = confirm("It's screwed to the wall. <click OK>");
          if (COINS === 1) { //first if
            var Ma = prompt("Do you have anything you can use to unscrew it? <type and enter the NAME of a RECIEVED ITEM FROM YOUR INVENTORY>").toUpperCase();
            if (Ma === COINS) { //second if
              COINS--
              var Munscrew = confirm("You removed the Mirror and found a CABINET DOOR KEY<click OK>")
            } else { //second if end, else start
              var Mwrong = confirm("That won't work. Try again! <click OK>");
            } //else end
          } //first if end
          break; //mirror break
        case 'SINK':
          var Si = confirm("You looked at the sink and turned one of the knobs and water started spilled out of the tap.");
          break; //sink break
        case 'TOILET':
          var Ti = confirm("A normal toilet.");
          var Tl = prompt("Where would you like to look? <type and enter BOWL or TANK>").toUpperCase();
          if (Tl === BOWL) { //if
          	var Tfind = confirm("You found COINS in the empty tank.");
            COINS++
          } else { //if end, else start
            var Ta = confirm("Nothing here. Not even water.")
          } //else end
          break; //toilet break
        case 'WINDOW':
          var Wi = confirm("The Window is barred. No use wasting time here.");
          break; //window break
        default:
          alert("Your headache seems to be impairing your speech. Try again."); //default end
      } //end Look switch
    } //end do
    while (DKEY < 1);
    var Escape = prompt("You finally found the key! Use it to escape? <type and enter USE>").toUpperCase();
    var Win = confirm("You opened the door and escaped the bathroom. YOU WIN! <click OK to end the game>");

    break; //game start 'yes' break

  case 'NO':
    var quit = confirm("You quit the game.");
    break;

  default:
    alert("Your headache seems to be impairing your speech. Try again.");
}
