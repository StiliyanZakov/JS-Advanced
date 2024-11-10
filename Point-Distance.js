class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Static method to calculate distance between two points
  static distance(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Example usage:
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2)); // Output: 5
