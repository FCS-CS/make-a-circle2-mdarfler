let x,y = 0;
function setup() {
  createCanvas(400, 400);
  frameRate();
}

function draw() {
  background(220);
  fill(255,25,71);
  ellipse(100,y,50,50);
  x++;
  y++;
  
  if (x > width){
    x = 0;
  }
  
  if (y > height){
    y = 0;
  }
}
