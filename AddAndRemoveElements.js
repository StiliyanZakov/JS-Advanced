function addAndRemoveElements(commands) {
  let result = [];
  let currentNumber = 1;

  for (let command of commands) {
    if (command === "add") {
      result.push(currentNumber); // Add the current number to the array
    } else if (command === "remove") {
      result.pop(); // Remove the last element from the array
    }
    currentNumber++; // Increment the current number after each command
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n")); // Print each element on a new line
  }
}

// Test cases
addAndRemoveElements(["add", "add", "add", "add"]);
// Output: 1 2 3 4

addAndRemoveElements(["add", "add", "remove", "add", "add"]);
// Output: 1 4 5

addAndRemoveElements(["remove", "remove", "remove"]);
// Output: Empty
