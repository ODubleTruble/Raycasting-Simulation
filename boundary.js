class Boundary {
  constructor(x1, y1, x2, y2) {
    // first end of the boundary
    this.a = createVector(x1, y1);

    // second end of the boundary
    this.b = createVector(x2, y2);
  }

  // draws the boundary
  show() {
    // sets the color for drawing lines
    stroke(255);

    // draws a line between the two ends of the boundary
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
