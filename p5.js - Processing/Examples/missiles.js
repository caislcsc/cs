// Computer Science Club
// Written by Oscar Llach and edited by Matias Silva
// A simple ship that shoots missile objects
// This project is not complete: lacks a missile object, doesn't remove old missiles

var player; // Initialize the player object

function setup() {
  createCanvas(windowWidth, windowHeight); // Create the HTML5 Canvas
  player = new Player(); // Make an instance of the Player object
  // The player variable will store all player properties including the rendering and the physics
}

function draw() {
  background(51); // Refresh the screen each frame
  player.physics(); // Calculate physics: position, velocity
  player.render(); // Use physics values to render the object on screen
}

function Player() { // Use the JavaScript constructor function
  this.missiles = []; // The array holds x, y locations (vectors) that we will use to draw missiles
  this.width = 100; // Set the dimensions of the player
  this.height = 50;
  this.x = 50; // Assign a starting value for x
  this.y = (height - this.height) / 2; // Assign a starting value for y


  this.render = function() { // Make a function that takes care of rendering
    // How you render it is up to you; here a rectangle is used
    fill(121, 109, 255); // Set the fill BEFORE you draw
    rect(this.x, this.y, this.width, this.height); // Use physics variables in the object
    fill(255, 2, 2); // Set the fill again to override previous fill()
    for (var i = 0; i < this.missiles.length; i++) { // Loop through all the player's missiles and render them
      var pos = this.missiles[i];
      ellipse(pos.x, pos.y, 20, 20);
    }
  };
  this.physics = function() { // Make a function that takes care of calculating physics (how the object moves)
    this.y = mouseY; // Set the object's vertical location to the mouse's vertical location
    for (var i = 0; i < this.missiles.length; i++) {
      this.missiles[i].x += 15; // Loop through all missiles and increase their position
      // NOTE: always use 'this.' notation when dealing with variables that belong to the object
    }
  };
  this.shoot = function() { // Write a function that adds a new x, y object to the missiles array
    this.missiles.push(
      { x: player.x + player.width, 
       y: player.y + player.height / 2 
      }
    );
  };
}

function keyPressed() {
  if (key === " ") { // Check if the user has pressed space
    player.shoot(); // Call a function on the player when the event is triggered
  }
}
