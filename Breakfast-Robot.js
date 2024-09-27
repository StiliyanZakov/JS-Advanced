function solution() {
  // Store initial stock levels
  const stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  // Recipes for different meals
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  // The main function to handle commands
  return function (command) {
    const [action, item, qty] = command.split(" ");
    const quantity = Number(qty);

    if (action === "restock") {
      stock[item] += quantity;
      return "Success";
    }

    if (action === "prepare") {
      const requiredIngredients = recipes[item];
      for (let ingredient in requiredIngredients) {
        if (stock[ingredient] < requiredIngredients[ingredient] * quantity) {
          return `Error: not enough ${ingredient} in stock`;
        }
      }
      // If enough ingredients are available, reduce stock
      for (let ingredient in requiredIngredients) {
        stock[ingredient] -= requiredIngredients[ingredient] * quantity;
      }
      return "Success";
    }

    if (action === "report") {
      return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }
  };
}

// Example execution:

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
