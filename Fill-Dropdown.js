function addItem() {
  // Get the input values
  const text = document.getElementById("newItemText").value;
  const value = document.getElementById("newItemValue").value;

  // Create a new option element
  const option = document.createElement("option");
  option.textContent = text;
  option.value = value;

  // Append the option to the dropdown menu
  const menu = document.getElementById("menu");
  menu.appendChild(option);

  // Clear the input fields
  document.getElementById("newItemText").value = "";
  document.getElementById("newItemValue").value = "";
}
