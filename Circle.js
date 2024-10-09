class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Getter for diameter
    get diameter() {
        return this.radius * 2;
    }

    // Setter for diameter
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    // Getter for area
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Example usage:
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);       // Radius: 2
console.log(`Diameter: ${c.diameter}`);   // Diameter: 4
console.log(`Area: ${c.area}`);           // Area: 12.566370614359172

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);       // Radius: 0.8
console.log(`Diameter: ${c.diameter}`);   // Diameter: 1.6
console.log(`Area: ${c.area}`);           // Area: 2.0106192982974678