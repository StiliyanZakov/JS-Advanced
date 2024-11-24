function solve() {
  // Get all the necessary elements
  const addButtons = document.querySelectorAll(".add-product");
  const checkoutButton = document.querySelector(".checkout");
  const textArea = document.querySelector("textarea");

  let products = new Set(); // To store unique products
  let totalPrice = 0; // To store the total price

  // Function to handle adding products to the cart
  addButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Find the product details
      const productElement = event.target.closest(".product");
      const productName =
        productElement.querySelector(".product-title").textContent;
      const productPrice = parseFloat(
        productElement.querySelector(".product-line-price").textContent
      );

      // Add the product name to the set (unique)
      products.add(productName);

      // Update the total price
      totalPrice += productPrice;

      // Log the added product to the text area
      textArea.value += `Added ${productName} for ${productPrice.toFixed(
        2
      )} to the cart.\n`;
    });
  });

  // Function to handle checkout
  checkoutButton.addEventListener("click", () => {
    // Create a list of unique product names
    const productList = Array.from(products).join(", ");

    // Log the final purchase summary
    textArea.value += `You bought ${productList} for ${totalPrice.toFixed(
      2
    )}.\n`;

    // Disable all buttons after checkout
    addButtons.forEach((button) => (button.disabled = true));
    checkoutButton.disabled = true;
  });
}
