// page-color-changer.js
// COMP1073 Client-Side JavaScript - Lab 2
// Adjusts the background-color of the HTML element using three RGB range sliders
// querySelector calls find the elements — same pattern as Lesson 1 (index.js)
// I've also added as many refrences to the lesson files as possible to ensure transparency
document.addEventListener('DOMContentLoaded', function() {

	// store references to the three slider inputs and the HTML element
	// Using querySelector lesson-4 pattern: const page = document.querySelector('html')
	// Using getElementById to match the lab's id attributes: id="red", id="green", id="blue"
	const page = document.querySelector('html');
	const redSlider = document.getElementById('red');
	const greenSlider = document.getElementById('green');
	const blueSlider = document.getElementById('blue');


	// reads the current value of each slider and applies the combined
	// RGB value as the background-color of the HTML element
	// Mirrors the pattern from lesson-4 in the conditional js file
	// Mirrors the rgb() strings from lesson-6/js/events.js: 'rgb(' + r + ',' + g + ',' + b + ')'
	function updateBackgroundColor() {
		// Read the numeric value from each slider using Number() — same as lesson-4
		let red   = Number(redSlider.value);
		let green = Number(greenSlider.value);
		let blue  = Number(blueSlider.value);

		// Build the rgb() colour string and apply it to the HTML element's background-color
		page.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	}

	// EVENT HANDLERS - listen for the 'change' event on each range slider
	// From lesson-4 wind speed slider pattern
	// Each handler calls updateBackgroundColor() so the page colour updates whenever a slider moves
	redSlider.addEventListener('change', updateBackgroundColor);
	greenSlider.addEventListener('change', updateBackgroundColor);
	blueSlider.addEventListener('change', updateBackgroundColor);

});