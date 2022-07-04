class Ray {
  constructor(x, y) {
    // the pos of the ray
    this.pos = createVector(x, y);

    // the direction the ray is pointing
    this.dir = createVector(1, 0);
  }

  // draws the ray
  show() {
    // sets the color for drawing lines
    stroke(255);

    // starts a new drawing state
    push();

    // changes the amount to displace objects created after this by
    // this means that (0, 0) is now the ray's pos
    translate(this.pos.x, this.pos.y);

    // draws a line starting at the ray's pos to ___
    line(0, 0, this.dir.x * 10, this.dir.y * 10);

    // restores the original drawing state
    pop();
  }
}
