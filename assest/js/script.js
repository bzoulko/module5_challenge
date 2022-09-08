/*
  Created:    09/7/2022 
  Programmer: Brian Zoulko
  Notes:      Devopled a javascript module to assist in controlling the Work Day Scheduler
              features.

  Modification
  ============
  09/7/20022 Brian Zoulko    Designed web-page and built a calendart application that allows
                             user to save events for each hour of the day in local storage.
*/


// Declare container varaible that points to the web page container section.
var cntSched = $('.container-fluid');

// Create the appropriate number of time slots.
var today = moment();
var hour = today.format("h");

// Format time elements from 9AM to 5PM and append to scheduler container.
for (var x = 9; x < 18; x++) {
  var time = (x < 13 ? x : (x-12)) + (x < 13 ? "AM" : "PM");
  var addClass = (x === parseInt(hour) ? "present" : (x > parseInt(hour) ? "future" : "past"));
  appendTimeSlot(cntSched, time, addClass);
}


/* ****************************************
  Add time slots to the work day scheduler.
******************************************* */
function appendTimeSlot (sched, time, addIt) {  

  // var currentTime = 
  // var additionalClass = 
  // //window.document.preventDefault();

  // Declare each part of the day planner schedular line.
  var frmSect  = $('<form class="form-inline">');
  var divTime  = $('<div class="hour">');
  var inpInput = $(`<input id=${time} class="form-control description col-xl col-lg-9 ${addIt}" type="text" aria-label="Work day Event">`); 
  var btnSave  = $(`<button id=${time} class="btn saveBtn" type="button">`);
  var imgIcon  = $('<img class="image-icon" src="./images/save.png">');

  // Set time and append all elements into the schedular container.
  divTime.text(time);
  btnSave.append(imgIcon);
  frmSect.append(divTime);
  frmSect.append(inpInput);
  frmSect.append(btnSave);
  sched.append(frmSect);

};

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

