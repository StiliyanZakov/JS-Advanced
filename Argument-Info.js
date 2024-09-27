function argumentInfo(...args) {
  let typeCounts = {};

  // Loop through the arguments and print type and value
  args.forEach((arg) => {
    let type = typeof arg;
    console.log(`${type}: ${arg}`);

    // Count occurrences of each type
    if (!typeCounts[type]) {
      typeCounts[type] = 0;
    }
    typeCounts[type]++;
  });

  // Sort the type counts by count in descending order, keeping order of appearance for ties
  Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
      console.log(`${type} = ${count}`);
    });
}

// Example usage:
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
