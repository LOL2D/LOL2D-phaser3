class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  copy() {
    return new Vector2D(this.x, this.y);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  add(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }

  addVec(vec) {
    return this.add(vec.x, vec.y);
  }

  sub(x, y) {
    this.x -= x;
    this.y -= y;
    return this;
  }

  subVec(vec) {
    return this.sub(vec.x, vec.y);
  }

  mult(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  mag() {
    return Math.sqrt(this.magSq());
  }

  magSq() {
    return this.x * this.x + this.y * this.y;
  }

  setMag(newMag) {
    const currentMag = this.mag();
    const d = newMag / currentMag;
    this.x *= d;
    this.x *= d;
    return this;
  }

  dist(vec) {
    return Math.sqrt(this.distSq(vec));
  }

  distSq(vec) {
    const a = this.x - vec.x;
    const b = this.y - vec.y;

    return a * a + b * b;
  }

  rotate(angle) {
    // https://stackoverflow.com/questions/28112315/how-do-i-rotate-a-vector
    angle = -this.toRadians(angle);

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    this.x = Math.round(10000 * (this.x * cos - this.y * sin)) / 10000;
    this.y = Math.round(10000 * (this.x * sin + this.y * cos)) / 10000;

    return this;
  }

  heading() {
    // https://stackoverflow.com/questions/35271222/getting-the-angle-from-a-direction-vector
    var angle = Math.atan2(this.y, this.x); //radians
    var degrees = this.toDegree(angle);
    return (360 + Math.round(degrees)) % 360;
  }

  toDegree(radians) {
    return (180 * radians) / Math.PI;
  }
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
}

Vector2D.getDirectionVector = function (vecBegin, vecEnd, magValue) {
  const subVec = new Vector2D(vecEnd.x - vecBegin.x, vecEnd.y - vecBegin.y);
  if (magValue) subVec.setMag(magValue);
  return subVec;
};

Vector2D.dist = function (vec1, vec2) {
  const a = vec1.x - vec2.x;
  const b = vec1.y - vec2.y;

  return Math.sqrt(a * a + b * b);
};

export { Vector2D };
