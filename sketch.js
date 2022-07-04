//import { Boundary } from './boundary.js';

let wall;
let ray;

function setup() {
  createCanvas(400, 400);

  wall = new Boundary(100, 100, 100, 200);
  ray = new Ray(200, 100);
}

function draw() {
  background(0);
  wall.show();
  ray.show();
}
