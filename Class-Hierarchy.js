function classHierarchy() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }

    get area() {
      return null;
    }

    changeUnits(newUnits) {
      this.units = newUnits;
    }

    convertUnits(value) {
      switch (this.units) {
        case "m":
          return value / 100; // convert from cm to m
        case "mm":
          return value * 10; // convert from cm to mm
        default:
          return value; // already in cm
      }
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units = "cm") {
      super(units);
      this._radius = radius; // stored in cm
    }

    get radius() {
      return this.convertUnits(this._radius);
    }

    get area() {
      const radius = this.radius;
      return Math.PI * radius * radius;
    }

    toString() {
      return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units = "cm") {
      super(units);
      this._width = width; // stored in cm
      this._height = height; // stored in cm
    }

    get width() {
      return this.convertUnits(this._width);
    }

    get height() {
      return this.convertUnits(this._height);
    }

    get area() {
      return this.width * this.height;
    }

    toString() {
      return `${super.toString()} Area: ${this.area} - width: ${
        this.width
      }, height: ${this.height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}


// Get the classes from the classHierarchy function
const { Circle, Rectangle, Figure } = classHierarchy();

// Now you can create instances of Circle, Rectangle, and Figure
let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); // Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
