var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(250, 250)


  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle)
  stroke(255, 0, 0)
  strokeWeight(7)
  line(0, 0, 130, 0);
  pop();

  mnAngle = map(mn, 0, 60, 0, 360);

  push();
  rotate(mnAngle)
  stroke(0, 255, 0)
  strokeWeight(7)
  line(0, 0, 150, 0);
  pop();

  hrAngle = map(hr, 0, 60, 0, 360);

  push();
  rotate(hrAngle)
  stroke(0, 0, 255)
  strokeWeight(7)
  line(0, 0, 75, 0);
  pop();

}