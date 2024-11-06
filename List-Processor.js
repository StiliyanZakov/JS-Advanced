function listProcessor(commands) {
  let collection = [];

  const processor = {
    add: function (str) {
      collection.push(str);
    },
    remove: function (str) {
      collection = collection.filter((item) => item !== str);
    },
    print: function () {
      console.log(collection.join(","));
    },
  };

  commands.forEach((command) => {
    let [cmd, value] = command.split(" ");
    processor[cmd](value);
  });
}

// Example 1
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
// Output: again,again

// Example 2
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
// Output: pesho,george
