function createCalorieObject(input) {
  let calorieObject = {};

  for (let i = 0; i < input.length; i += 2) {
    let food = input[i];
    let calories = Number(input[i + 1]);
    calorieObject[food] = calories;
  }

  console.log(calorieObject);
}

// Example usage:
createCalorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
// Output: { Yoghurt: 48, Rise: 138, Apple: 52 }

createCalorieObject([
  "Potato",
  "93",
  "Skyr",
  "63",
  "Cucumber",
  "18",
  "Milk",
  "42",
]);
// Output: { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
