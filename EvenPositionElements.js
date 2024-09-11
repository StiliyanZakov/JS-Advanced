function evenPositionElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}

// Test cases
evenPositionElements(["20", "30", "40", "50", "60"]); // Output: 20 40 60
evenPositionElements(["5", "10"]); // Output: 5
