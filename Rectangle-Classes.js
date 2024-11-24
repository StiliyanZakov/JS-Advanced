class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Method to calculate the area of the rectangle
  calcArea() {
    return this.width * this.height;
  }
}

// Example usage:
let rect = new Rectangle(4, 5, "Red");

console.log(rect.width); // Output: 4
console.log(rect.height); // Output: 5
console.log(rect.color); // Output: Red
console.log(rect.calcArea()); // Output: 20
