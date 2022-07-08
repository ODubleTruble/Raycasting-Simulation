/* eslint no-undef: 0 */
/* eslint no-console: 0 */
/* eslint no-plusplus: 0 */

// eslint-disable-next-line no-unused-vars
class Ray {
  constructor(pos, angle) {
    // the pos of the ray
    this.pos = pos;

    // the direction the ray is pointing
    this.dir = p5.Vector.fromAngle(angle);
  }

  // draws the ray
  show() {
    // sets the color for drawing the ray
    stroke(255);

    // starts a new drawing state
    push();

    // changes the amount to displace objects created after this by
    // this means that (0, 0) is now the ray's pos
    translate(this.pos.x, this.pos.y);

    // draws a line starting at the ray's pos to the tip of the ray
    line(0, 0, this.dir.x * 10, this.dir.y * 10);

    // restores the original drawing state
    pop();
  }

  // makes the ray look at a specific point
  lookAt(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;

    // sets the vector to be a length of 1
    this.dir.normalize();
  }

  // casts the ray at a boundary (or wall)
  cast(wall) {
    // intersection forumulas from wikipedia page "Line–line intersection"

    // coords of the wall
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    // coords of the ray
    // ray's tail
    const x3 = this.pos.x;
    const y3 = this.pos.y;
    // ray's head
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    // denominator used to calculate t and u
    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    // eslint-disable-next-line eqeqeq
    if (den == 0) {
      // returns undefined if the lines are parallel
      return undefined;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    // runs if there's an intersection
    // 0<t<1 = intersection between the ends of the wall
    // 0<u = intersection from the rays tail then in the direction of the ray
    if (t > 0 && t < 1 && u > 0) {
      // the points of intersection
      const pt = createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    }

    // returns undefined if there's no intersection
    return undefined;
  }
}
