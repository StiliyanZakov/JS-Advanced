class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(length) {
    this.innerLength += length; // Increase the length property by the given value
  }

  decrease(length) {
    this.innerLength -= length; // Decrease the length property by the given value
    if (this.innerLength < 0) {
      this.innerLength = 0; // Ensure the length does not fall below 0
    }
  }

  toString() {
    if (this.innerLength === 0) {
      return "..."; // If the length is 0, return just 3 dots
    } else if (this.innerString.length > this.innerLength) {
      return this.innerString.slice(0, this.innerLength) + "..."; // Truncate and add 3 dots if the string is longer than innerLength
    } else {
      return this.innerString; // If no truncation is needed, return the original string
    }
  }
}

// Example usage:

let test = new Stringer("Test", 5);
console.log(test.toString()); // Output: Test

test.decrease(3);
console.log(test.toString()); // Output: Te...

test.decrease(5);
console.log(test.toString()); // Output: ...

test.increase(4);
console.log(test.toString()); // Output: Test
