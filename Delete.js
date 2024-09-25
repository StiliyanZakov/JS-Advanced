function addItem() {
  // Get the value of the new item text
  const newItemText = document.getElementById("newItemText").value;

  if (newItemText.trim() !== "") {
    // Create a new list item (li)
    const liElement = document.createElement("li");

    // Set the text content for the new item
    liElement.textContent = newItemText;

    // Create a delete link (a)
    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = " [Delete]";

    // Attach an event listener to the delete link
    deleteLink.addEventListener("click", function (event) {
      event.preventDefault();
      liElement.remove(); // Removes the list item when the link is clicked
    });

    // Append the delete link to the list item
    liElement.appendChild(deleteLink);

    // Append the list item to the list (ul)
    document.getElementById("items").appendChild(liElement);

    // Clear the input field for the next entry
    document.getElementById("newItemText").value = "";
  }
}
