/* eslint no-undef: 0 */
/* eslint no-console: 0 */
/* eslint no-plusplus: 0 */

// emits rays
// eslint-disable-next-line no-unused-vars
class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);

    // array of rays that will emit from the particle
    this.rays = [];

    // creates the rays for the particle
    for (let a = 0; a < 360; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  // draws the particle
  show() {
    fill(255);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 4);

    // displays all the rays
    this.rays.forEach((ray) => ray.show());
  }

  // detects collision between the particle's rays and an array of boundaries
  look(walls) {
    // rusn for every ray in the particle
    this.rays.forEach((ray) => {
      // the closest intersection point
      let closestPt = null;

      // the shortest intersection distance
      let closestDis = Infinity;

      walls.forEach((wall) => {
        // gets the point of intersection between the current ray and the current wall
        const pt = ray.cast(wall);

        // runs if there's a point of intersection
        if (pt) {
          // the distance from the particle to the point
          const d = p5.Vector.dist(this.pos, pt);

          // runs if the new intersection point is the closest one
          if (d < closestDis) {
            // sets the new closestDis and closestPt
            closestDis = d;
            closestPt = pt;
          }
        }
      });

      // runs if there's a closest point of intersection
      if (closestPt) {
        stroke(255, 100);
        // displays the point
        line(this.pos.x, this.pos.y, closestPt.x, closestPt.y);
      }
    });
  }

  // updates the particle's pos to a point
  update(x, y) {
    this.pos.set(x, y);
  }
}
