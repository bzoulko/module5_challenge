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
var hour = today.format("H");
var date = today.format('dddd, MMMM Do')
var currentDay = $('#currentDay').text(date);

// Format time elements from 9AM to 5PM and append to scheduler container.
for (var x = 9; x < 18; x++) {
  var time = (x < 13 ? x : (x-12)) + (x < 13 ? "AM" : "PM");
  var addClass = (x === parseInt(hour) ? "present" : (x > parseInt(hour) ? "future" : "past"));
  appendTimeSlot(cntSched, time, addClass);
}


/* *********************************************************************
  Add time slots to the work day scheduler and preload and saved events.
************************************************************************ */
function appendTimeSlot (sched, time, addClass) {  

  // Declare each part of the day planner schedular line.
  var key = time + ":" + date.split(",")[0];
  var frmSect  = $('<form class="form-inline"> method="POST" onsubmit="false"');
  var divTime  = $('<div class="hour">');
  var inpInput = $(`<input id=${key} class="form-control description col-xl col-lg-9 ${addClass}" type="text" aria-label="Work day Event">`); 
  var btnSave  = $(`<button id=${key} class="btn saveBtn" type="button">`);
  var imgIcon  = $('<img class="image-icon" src="./images/save.png">');
  var data = getData(key);

  // Set time and append all elements into the schedular container.
  inpInput.val(data);
  divTime.text(time);
  btnSave.append(imgIcon);
  frmSect.append(divTime);
  frmSect.append(inpInput);
  frmSect.append(btnSave);
  sched.append(frmSect);


  // On Button Click event save to local storage.
  btnSave.on('click', function () {
    putData(this.id, inpInput.val());    
  });


  /* ****************************************************************************
    Store data in localStorage based on a key and the value or data being passed.
  ******************************************************************************* */
  function putData(key, value){
    localStorage.setItem(key, value);
  }


  /* ****************************************************
    Return the value for a specific key in local storage.
  ******************************************************* */
  function getData(key) {
    console.log("getting data by key: " + key);
    return(localStorage.getItem(key));
  }
  
};
