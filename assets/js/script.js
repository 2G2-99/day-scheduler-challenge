'use strict';
// # Elements of the DOM
let timeBlock = $('.hour');
let timeSlot = $('.time-slot');
let eventsBox = $('.events-box');

//
// let atNine = document.querySelector('#at-nine').value;
// let atTen = document.querySelector('#at-ten').value;
// let atEleven = document.querySelector('#at-eleven').value;
// let atTwelve = document.querySelector('#at-twelve').value;
// let atOne = document.querySelector('#at-one').value;
// let atTwo = document.querySelector('#at-two').value;
// let atThree = document.querySelector('#at-three').value;
// let atFour = document.querySelector('#at-four').value;
// let atFive = document.querySelector('#at-five').value;
//

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

// Function to save the content of the
function saveContent(event) {
	let calendarItem =
		event.target.parentElement.parentElement.previousElementSibling
			.firstChild.nextElementSibling.value;
	console.log(calendarItem);
	localStorage.setItem(event.target.attributes[0].value, calendarItem);
}

$('.save-button').on('click', saveContent);

// ----------------------------------
$(document).ready(function () {
	if (localStorage['9am'] !== null && localStorage['9am'] !== undefined) {
		var nineAm = $(`<p>${localStorage['9am']}</p>`);
		$('#at-nine').append(nineAm[0].innerText);
		console.log(nineAm[0]);
	} else {
		('');
	}
	if (localStorage['10am'] !== null && localStorage['10am'] !== undefined) {
		let tenAm = $(`<p>${localStorage['10am']}</p>`);
		$('#at-ten').append(tenAm[0].textContent);
		console.log(tenAm[0]);
	} else {
		('');
	}
	if (localStorage['11am'] !== null && localStorage['11am'] !== undefined) {
		let elevenAm = $(`<p>${localStorage['11am']}</p>`);
		$('#at-eleven').append(elevenAm[0].textContent);
		console.log(elevenAm[0]);
	} else {
		('');
	}
	if (localStorage['12pm'] !== null && localStorage['12pm'] !== undefined) {
		let twelvePm = $(`<p>${localStorage['12pm']}</p>`);
		$('#at-twelve').append(twelvePm[0].textContent);
		console.log(twelvePm[0]);
	} else {
		('');
	}
	if (localStorage['1pm'] !== null && localStorage['1pm'] !== undefined) {
		let onePm = $(`<p>${localStorage['1pm']}</p>`);
		$('#at-one').append(onePm[0].textContent);
		console.log(onePm[0]);
	} else {
		('');
	}
	if (localStorage['2pm'] !== null && localStorage['2pm'] !== undefined) {
		let twoPm = $(`<p>${localStorage['2pm']}</p>`);
		$('#at-two').append(twoPm[0].textContent);
		console.log(twoPm[0]);
	} else {
		('');
	}
	if (localStorage['3pm'] !== null && localStorage['3pm'] !== undefined) {
		let threePm = $(`<p>${localStorage['3pm']}</p>`);
		$('#at-three').append(threePm[0].textContent);
		console.log(threePm[0]);
	} else {
		('');
	}
	if (localStorage['4pm'] !== null && localStorage['4pm'] !== undefined) {
		let fourPm = $(`<p>${localStorage['4pm']}</p>`);
		$('#at-four').append(fourPm[0].textContent);
		console.log(fourPm[0]);
	} else {
		('');
	}
	if (localStorage['5pm'] !== null && localStorage['5pm'] !== undefined) {
		let fivePm = $(`<p>${localStorage['5pm']}</p>`);
		$('#at-five').append(fivePm[0].textContent);
		console.log(fivePm[0]);
	} else {
		('');
	}
});

// TODO: As bonus create a button at the bottom that clears out the app
