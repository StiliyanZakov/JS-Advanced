function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
}

// Example usage:
gcd(15, 5); // Output: 5
gcd(2154, 458); // Output: 2
