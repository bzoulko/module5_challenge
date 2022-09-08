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
var container = $('.container');
var u1 = $('<u1 class="time-block">');

// Create the appropriate number of time slots.
for (var x = 0; x < 31; x++) appendTimeSlot(u1, x);
container.append(u1);


/* ****************************************
  Add time slots to the work day scheduler.
******************************************* */
function appendTimeSlot (ul, time) {
  var listItem = $('<li class="list-group-item">').text(time);
  listItem.appendTo(u1);
};
