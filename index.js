class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    function getSum(total, num) {
      return total + num;
    }
    return this.sides.reduce(getSum);
  }

}

class Triangle extends Polygon {

  get isValid() {
    if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {

  get isValid() {
    if ((this.sides[0] === this.sides[1]) && (this.sides[2] === this.sides[3]) && (this.sides[0] === this.sides[2])) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}
