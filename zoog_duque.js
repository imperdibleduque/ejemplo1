// Example 3-6: Interactive Zoog ampliado
function  setup() {
  // Set the size of the window
  createCanvas(windowWidth, windowHeight);  
  // The frame rate is set to 30 frames per second.
  frameRate(30);
  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  fill(150, 100);
  rectMode(CENTER);
  rect(width/2, height/2, windowWidth, windowHeight);

  // Draw Zoog's body
  stroke(0);
  fill(0, 0, 175);
  rect(mouseX, mouseY, 20, 100);

  // Draw Zoog's head
  stroke(0);
  fill(0, 175, 0);
  ellipse(mouseX, mouseY-30, 60, 60); 

  // Draw Zoog's eyes
  // The eye color is determined by the mouse location.
  fill(mouseX/2, 0, mouseY/2); 
  ellipse(mouseX-19, mouseY-30, 16, 32); 
  ellipse(mouseX+19, mouseY-30, 16, 32); 

  // Draw Zoog's legs
  stroke(0);
  // The legs are drawn according to the mouse location and the previous mouse location.
  line(mouseX-10, mouseY+50, pmouseX-10, pmouseY+60);
  line(mouseX+10, mouseY+50, pmouseX+10, pmouseY+60);
}
