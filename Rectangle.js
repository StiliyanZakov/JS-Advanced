function rectangle(width, height, color) {
  // Capitalize the first letter of the color
  color = color[0].toUpperCase() + color.slice(1);

  // Return the rectangle object
  return {
    width: width,
    height: height,
    color: color,
    calcArea: function () {
      return this.width * this.height;
    },
  };
}

// Example usage:

let rect = rectangle(4, 5, "red");
console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // Red
console.log(rect.calcArea()); // 20
