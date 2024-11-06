function juiceFlavors(input) {
  let juiceQuantities = {};
  let bottles = {};

  input.forEach((line) => {
    let [juice, quantity] = line.split(" => ");
    quantity = Number(quantity);

    // Sum the quantities for each juice
    if (!juiceQuantities[juice]) {
      juiceQuantities[juice] = 0;
    }
    juiceQuantities[juice] += quantity;

    // Check if we can produce any bottles
    if (juiceQuantities[juice] >= 1000) {
      let producedBottles = Math.floor(juiceQuantities[juice] / 1000);
      juiceQuantities[juice] %= 1000; // Keep the remaining juice

      if (!bottles[juice]) {
        bottles[juice] = 0;
      }
      bottles[juice] += producedBottles;
    }
  });

  // Print out the produced bottles
  for (let juice in bottles) {
    console.log(`${juice} => ${bottles[juice]}`);
  }
}

// Example usage:

let input1 = [
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
];

let input2 = [
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
];

juiceFlavors(input1);
// Output:
// Orange => 2
// Peach => 2

juiceFlavors(input2);
// Output:
// Pear => 8
// Watermelon => 10
// Kiwi => 4
