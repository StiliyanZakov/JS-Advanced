function listOfNames(names) {
  // Sort the names alphabetically
  names.sort((a, b) => a.localeCompare(b));

  // Print each name with its index (starting from 1)
  names.forEach((name, index) => {
    console.log(`${index + 1}.${name}`);
  });
}

// Test case
listOfNames(["John", "Bob", "Christina", "Ema"]);
// Output:
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John
