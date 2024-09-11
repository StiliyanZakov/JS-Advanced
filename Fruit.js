function calculateFruitCost(fruit, weightInGrams, pricePerKg) {
  // Convert weight to kilograms
  let weightInKg = weightInGrams / 1000;

  // Calculate the cost
  let money = weightInKg * pricePerKg;

  // Print the result with two decimal places
  console.log(
    `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

// Example usage:
calculateFruitCost("orange", 2500, 1.8); // Output: I need $4.50 to buy 2.50 kilograms orange.
calculateFruitCost("apple", 1563, 2.35); // Output: I need $3.67 to buy 1.56 kilograms apple.
