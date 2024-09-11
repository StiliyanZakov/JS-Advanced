function wordsUppercase(input) {
  // Use a regular expression to extract words
  let words = input.match(/\w+/g);

  // Convert words to uppercase
  let upperCaseWords = words.map((word) => word.toUpperCase());

  // Join words with ", " and output the result
  console.log(upperCaseWords.join(", "));
}

// Example 1
wordsUppercase("Hi, how are you?");

// Example 2
wordsUppercase("hello");
