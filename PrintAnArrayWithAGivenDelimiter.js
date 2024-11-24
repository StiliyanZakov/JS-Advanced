function printArrayWithDelimiter(arr, delimiter) {
  console.log(arr.join(delimiter));
}

// Test cases
printArrayWithDelimiter(["One", "Two", "Three", "Four", "Five"], "-");
// Output: One-Two-Three-Four-Five

printArrayWithDelimiter(
  ["How about no?", "I", "will", "not", "do", "it!"],
  "_"
);
// Output: How about no?_I_will_not_do_it!
