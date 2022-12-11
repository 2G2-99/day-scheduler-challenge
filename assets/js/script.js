'use strict';
// # Elements of the DOM
let timeBlock = $('.hour');
let timeSlot = $('.time-slot');
let saveButton = $('.save-button');
// # Variables
let currentTime = Number(moment().format('H'));

// Function to give a background color to each time slot
function getBackground() {
	let hourId = Number(this.id);

	if (hourId === currentTime) {
		$(this).next().addClass('present');
	} else if (hourId < currentTime) {
		$(this).next().addClass('past');
	} else if (hourId > currentTime) {
		$(this).next().addClass('future');
	}
}

// Iteration over the timeBlock
timeBlock.each(getBackground);

// function to show current date
function currentDate() {
	let date = moment(new Date()).format('dddd, MMMM Do YYYY');
	return $('#current-day').text(date);
}
currentDate();

// function to stop default of textarea
$(document).ready(function () {
	$('textarea').keypress(function (event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	});
});

// * TASK 3
// todo
// Use local storage to keep the entered data after SAVE BUTTON is clicked
// The events persist even after refresh

// Function to save when button gets clicked
$('.save-button').on('click', function (event) {
	let calendarItem =
		event.target.parentElement.parentElement.previousElementSibling
			.firstChild.nextElementSibling;
	console.log(calendarItem);
	console.log(event.target.attributes[0].value);
	localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

// TODO: As bonus create a button at the bottom that clears out the app
