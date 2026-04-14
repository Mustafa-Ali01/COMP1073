// Get CANVAS element ready to draw on
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;

// Function to generate random number
function random(min,max) {
	let num = Math.floor(Math.random()*(max-min)) + min;
	return num;
}

// STEP 1: Create a constructor function for a ball
class Ball {
	constructor(x, y, velX, velY, color, size) {
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
		this.color = color;
		this.size = size;
	};
	// STEP 2: Add the draw() method to the Ball class built above
	draw() {
		// STEP 2a: Get ready to draw with the pen
		ctx.beginPath();
		// STEP 2b: Determine color of pen to draw with
		ctx.fillStyle = this.color;
		// STEP 2c: Decide on size of circle to draw
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI, false);
		// STEP 2d: Actually draw on the canvas
		ctx.fill();
	};
	// STEP 3: Include an update() method to the Ball class
	update() {
		// STEP 3a: Check for collision with right or left edge of screen
		if ((this.x + this.size) >= canvasWidth || (this.x - this.size) <= 0) {
			// STEP 3b: Ball has hit the left or right edge of the canvas, so reverse the direction of travel
			this.velX = -(this.velX);
		};
		// STEP 3c: Check for collision with top or bottom edge of screen
		if ((this.y + this.size) >= canvasHeight || (this.y - this.size) <= 0) {
			// STEP 3d: Ball has hit the top or bottom edge of the canvas, so reverse the direction of travel
			this.velY = -(this.velY);
		};
		// STEP 3e: Move the ball each time this method is called
		this.x += this.velX;
		this.y += this.velY;
	};
};

// STEP 4: Create an array to contain all the balls
let balls = [];

// STEP 5: Build the animation loop
function loop() {
	// STEP 5a: Paint a black rectangle over top of the old canvas drawing
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	// STEP 5b: Create up to 25 randomly colored balls, and push each one to the balls array...
	while (balls.length < 25) {
		let ball = new Ball(
			random(50, canvasWidth - 50),
			random(50, canvasHeight - 50),
			random(1, 10),
			random(1, 10),
			`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
			random(10, 50)
		);
		balls.push(ball);
	};
	// STEP 5c: For each ball object instance, draw it and update it
	for (let i = 0; i < balls.length; i ++) {
		balls[i].draw();
		balls[i].update();
	};
	// STEP 5d: Use the requestAnimationFrame to loop
	requestAnimationFrame(loop);
};

// STEP 6: Call the animation loop() function to get things rolling
loop();

/* Read the full tutorial (which also includes collision detection) at MDN available at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice */
