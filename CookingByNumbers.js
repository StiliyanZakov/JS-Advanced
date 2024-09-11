function cookingByNumbers(...args) {
  let number = Number(args[0]);

  const operations = {
    chop: (num) => num / 2,
    dice: (num) => Math.sqrt(num),
    spice: (num) => num + 1,
    bake: (num) => num * 3,
    fillet: (num) => +(num * 0.8).toFixed(1),
  };

  for (let i = 1; i < args.length; i++) {
    const operation = args[i];
    number = operations[operation](number);
    console.log(number);
  }
}

// Example usage:
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
// Output: 16, 8, 4, 2, 1

cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
// Output: 3, 4, 2, 6, 4.8
