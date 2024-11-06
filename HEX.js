class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value; // Return the value property of the hex class
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`; // Convert to hexadecimal with '0x' and uppercase digits
  }

  plus(numberOrHex) {
    let result =
      this.value +
      (numberOrHex instanceof Hex ? numberOrHex.value : numberOrHex);
    return new Hex(result); // Return a new Hex object with the sum
  }

  minus(numberOrHex) {
    let result =
      this.value -
      (numberOrHex instanceof Hex ? numberOrHex.value : numberOrHex);
    return new Hex(result); // Return a new Hex object with the result of subtraction
  }

  static parse(hexString) {
    return parseInt(hexString, 16); // Parse a hexadecimal string to a decimal number
  }
}

// Example usage:

let FF = new Hex(255);
console.log(FF.toString()); // Output: 0xFF

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // Output: 0xF
console.log(a.plus(b).toString() === "0xF"); // Output: true

console.log(Hex.parse("AAA")); // Output: 2730
