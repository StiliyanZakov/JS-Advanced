function cars(commands) {
  let objects = {};

  const commandProcessor = {
    create: function (name, inherit, parentName) {
      if (inherit) {
        // Create an object that inherits from the parent object
        objects[name] = Object.create(objects[parentName]);
      } else {
        // Create a new plain object
        objects[name] = {};
      }
    },
    set: function (name, key, value) {
      // Set a property for the object
      objects[name][key] = value;
    },
    print: function (name) {
      let result = [];
      for (let key in objects[name]) {
        result.push(`${key}:${objects[name][key]}`);
      }
      console.log(result.join(","));
    },
  };

  commands.forEach((command) => {
    let tokens = command.split(" ");

    if (tokens[0] === "create" && tokens.length === 2) {
      commandProcessor.create(tokens[1]);
    } else if (
      tokens[0] === "create" &&
      tokens.length === 4 &&
      tokens[2] === "inherit"
    ) {
      commandProcessor.create(tokens[1], true, tokens[3]);
    } else if (tokens[0] === "set") {
      commandProcessor.set(tokens[1], tokens[2], tokens[3]);
    } else if (tokens[0] === "print") {
      commandProcessor.print(tokens[1]);
    }
  });
}

// Example usage:

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1", // Output: color:red
  "print c2", // Output: model:new,color:red
]);
