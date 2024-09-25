function solution(initialValue) {
  let currentValue = initialValue;

  return function (numToAdd) {
    return currentValue + numToAdd;
  };
}

// First input:
let add5 = solution(5);
console.log(add5(2)); // Output should be: 7 (5 + 2)
console.log(add5(3)); // Output should be: 8 (5 + 3)

// Second input:
let add7 = solution(7);
console.log(add7(2)); // Output should be: 9 (7 + 2)
console.log(add7(3)); // Output should be: 10 (7 + 3)
