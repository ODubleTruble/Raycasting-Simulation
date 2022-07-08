/* eslint no-undef: 0 */
/* eslint no-console: 0 */
/* eslint no-plusplus: 0 */

const walls = [];
let particle;

// eslint-disable-next-line no-unused-vars
function setup() {
  createCanvas(400, 400);

  for (let i = 1; i < 5; i++) {
    const x1 = random(width);
    const x2 = random(width);
    const y1 = random(height);
    const y2 = random(height);
    walls.push(new Boundary(x1, y1, x2, y2));
  }

  particle = new Particle();
}

// eslint-disable-next-line no-unused-vars
function draw() {
  background(0);

  walls.forEach((wall) => wall.show());
  particle.update(mouseX, mouseY);
  particle.show();

  particle.look(walls);

  // const pt = ray.cast(wall);

  // if (pt) {
  //   stroke(100, 100, 255);
  //   fill(100, 100, 255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
}
