function lowestPricesInCities(input) {
  let productData = {};

  for (let line of input) {
    // Split the input into town, product, and price
    let [town, product, price] = line.split(" | ");
    price = Number(price); // Convert the price to a number

    // If the product is not in the productData object, or the new price is lower, update it
    if (!productData[product] || productData[product].price > price) {
      productData[product] = { price, town };
    }
  }

  // Print the results in the desired format
  for (let product in productData) {
    console.log(
      `${product} -> ${productData[product].price} (${productData[product].town})`
    );
  }
}

// Example usage:

lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
// Expected Output:
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
