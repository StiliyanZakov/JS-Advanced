function sumFirstLast(arr) {
  let first = Number(arr[0]); 
  let last = Number(arr[arr.length - 1]); 
  return first + last;
}

// Test cases
console.log(sumFirstLast(["20", "30", "40"])); // Output: 60
console.log(sumFirstLast(["5", "10"])); // Output: 15
