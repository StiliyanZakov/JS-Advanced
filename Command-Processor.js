function solution() {
  let internalString = "";

  return {
    append: function (str) {
      internalString += str;
    },
    removeStart: function (n) {
      internalString = internalString.substring(n);
    },
    removeEnd: function (n) {
      internalString = internalString.substring(0, internalString.length - n);
    },
    print: function () {
      console.log(internalString);
    },
  };
}

// Test the first example
let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print(); // Expected output: loa

// Test the second example
let secondZeroTest = solution();
secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print(); // Expected output: 34
