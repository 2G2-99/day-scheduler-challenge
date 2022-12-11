'use strict';
// # Elements of the DOM
let timeBlock = $('.hour');
let timeSlot = $('.time-slot');

// # Variables
let currentTime = Number(moment().format('H'));
console.log(currentTime);

// * TASK 1
// todo
// Create a table with bootstrap
// The table must have three columns...
// HOUR
// EVENT (Text area)
// SAVE BUTTON

// todo
// Each table row should be dynamically get a background color based
function getBackground() {
	let hourId = Number(this.id);

	if (hourId === currentTime) {
		$(this).next().addClass('present');
	} else if (hourId < currentTime) {
		$(this).next().addClass('past');
	} else if (hourId > currentTime) {
		$(this).next().addClass('future');
	}
	console.log(hourId);
}
timeBlock.each(getBackground);

// * TASK 2
// todo
// At top show the current day
function currentDate() {
	let date = moment(new Date()).format('dddd, MMMM Do YYYY');
	return $('#current-day').text(date);
}
currentDate();
// Each time block should have a color code...
// PAST: grey
// CURRENT: orange
// AHEAD: lightgreen

// * TASK 3
// todo
// Use local storage to keep the entered data after SAVE BUTTON is clicked
// The events persist even after refresh

// TODO: As bonus create a button at the bottom that clears out the app
