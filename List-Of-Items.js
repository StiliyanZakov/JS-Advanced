function addItem() {
  // Get the value from the input field
  const input = document.getElementById("newItemText");
  const inputValue = input.value;

  // Ensure the input is not empty
  if (inputValue.trim() !== "") {
    // Create a new list item (li) element
    const li = document.createElement("li");
    li.textContent = inputValue; // Set its text to the value from the input

    // Append the new list item to the ul element
    const ul = document.getElementById("items");
    ul.appendChild(li);

    // Clear the input field after adding the item
    input.value = "";
  }
}
