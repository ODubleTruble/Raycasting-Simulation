/* eslint no-undef: 0 */
/* eslint no-console: 0 */

let wall;
let ray;

// eslint-disable-next-line no-unused-vars
function setup() {
  createCanvas(400, 400);

  wall = new Boundary(100, 100, 100, 200);
  ray = new Ray(200, 100);
}

// eslint-disable-next-line no-unused-vars
function draw() {
  background(0);
  wall.show();
  ray.show();
  ray.lookAt(mouseX, mouseY);

  const pt = ray.cast(wall);

  if (pt) {
    stroke(100, 100, 255);
    fill(100, 100, 255);
    ellipse(pt.x, pt.y, 8, 8);
  }
}
