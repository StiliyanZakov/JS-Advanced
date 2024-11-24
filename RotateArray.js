function rotateArray(arr, rotations) {
  // Calculate the effective rotations by using the modulo operator
  rotations = rotations % arr.length;

  // Perform the rotations by slicing the array and rearranging
  let rotatedArray = arr.slice(-rotations).concat(arr.slice(0, -rotations));

  // Print the resulting array elements on one line, separated by a single space
  console.log(rotatedArray.join(" "));
}

// Test cases
rotateArray(["1", "2", "3", "4"], 2);
// Output: 3 4 1 2

rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
// Output: Orange Coconut Apple Banana
