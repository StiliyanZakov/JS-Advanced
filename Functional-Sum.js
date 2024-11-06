function add(n) {
  let sum = n;

  function innerAdd(x) {
    sum += x;
    return innerAdd;
  }

  innerAdd.toString = function () {
    return sum;
  };

  return innerAdd;
}

// Example usage:
console.log(add(1).toString()); // Output: 1
console.log(add(1)(6)(-3).toString()); // Output: 4
