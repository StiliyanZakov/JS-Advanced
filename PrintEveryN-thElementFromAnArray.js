function printNthElement(arr, step) {
  let result = [];

  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }

  return result;
}

// Test cases
console.log(printNthElement(["5", "20", "31", "4", "20"], 2));
// Output: ['5', '31', '20']

console.log(printNthElement(["dsa", "asd", "test", "tset"], 2));
// Output: ['dsa', 'test']

console.log(printNthElement(["1", "2", "3", "4", "5"], 6));
// Output: ['1']
