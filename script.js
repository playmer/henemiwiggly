// Set initial values
var x = 0;
var y = 0;
var speed = 2;
var directionX = 1;
var directionY = 1;

// Get elements
var img = document.getElementById("img");
var btn = document.getElementById("btn");

// Set button event listener
btn.addEventListener("click", function() {
  // Increase speed by 5
  speed += 1;
});

// Bouncing animation function
function animate() {
  // Calculate new position
  x += speed * directionX;
  y += speed * directionY;

  // Reverse direction if image hits edges of the screen
  if (x + img.width > window.innerWidth || x < 0) {
    directionX *= -1;
  }
  if (y + img.height > window.innerHeight || y < 0) {
    directionY *= -1;
  }

  // Update image position
  img.style.left = x + "px";
  img.style.top = y + "px";

  // Call animate function again
  requestAnimationFrame(animate);
}

// Start animation
animate();