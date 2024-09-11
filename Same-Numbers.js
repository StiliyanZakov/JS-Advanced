function checkSameNumbers(number) {
  const digits = number.toString().split("").map(Number);
  const allSame = digits.every((digit) => digit === digits[0]);
  const sumOfDigits = digits.reduce((sum, digit) => sum + digit, 0);

  console.log(allSame);
  console.log(sumOfDigits);
}

// Example usage:
checkSameNumbers(2222222); // Output: true 14
checkSameNumbers(1234); // Output: false 10
