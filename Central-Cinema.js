function solve() {
  // Get input fields and button
  const [nameInput, hallInput, priceInput] =
    document.querySelectorAll("#container input");
  const onScreenButton = document.querySelector("#container button");
  const moviesList = document.querySelector("#movies ul");
  const archiveList = document.querySelector("#archive ul");
  const clearButton = document.querySelector("#archive button");

  // Add movie to "Movies on Screen" when clicking "On Screen"
  onScreenButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = nameInput.value.trim();
    const hall = hallInput.value.trim();
    const price = parseFloat(priceInput.value.trim()).toFixed(2);

    // Validate inputs
    if (name === "" || hall === "" || isNaN(price)) {
      return; // Don't proceed if inputs are invalid
    }

    // Create the movie list item
    const movieLi = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = name;
    const strongHall = document.createElement("strong");
    strongHall.textContent = `Hall: ${hall}`;
    const div = document.createElement("div");
    const strongPrice = document.createElement("strong");
    strongPrice.textContent = price;
    const input = document.createElement("input");
    input.placeholder = "Tickets Sold";
    const archiveButton = document.createElement("button");
    archiveButton.textContent = "Archive";

    // Append elements to the list item
    div.appendChild(strongPrice);
    div.appendChild(input);
    div.appendChild(archiveButton);
    movieLi.appendChild(span);
    movieLi.appendChild(strongHall);
    movieLi.appendChild(div);

    // Add the movie to "Movies on Screen"
    moviesList.appendChild(movieLi);

    // Clear inputs
    nameInput.value = "";
    hallInput.value = "";
    priceInput.value = "";

    // Handle the "Archive" button click
    archiveButton.addEventListener("click", function () {
      const ticketsSold = parseInt(input.value);
      if (isNaN(ticketsSold)) {
        return; // Don't proceed if tickets sold is not a number
      }

      // Calculate total profit
      const totalProfit = (ticketsSold * price).toFixed(2);

      // Create archive list item
      const archiveLi = document.createElement("li");
      const archiveSpan = document.createElement("span");
      archiveSpan.textContent = name;
      const totalAmount = document.createElement("strong");
      totalAmount.textContent = `Total amount: ${totalProfit}`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      // Append elements to the archive list item
      archiveLi.appendChild(archiveSpan);
      archiveLi.appendChild(totalAmount);
      archiveLi.appendChild(deleteButton);

      // Add the movie to the archive
      archiveList.appendChild(archiveLi);

      // Remove the movie from "Movies on Screen"
      movieLi.remove();

      // Handle the "Delete" button click in the archive
      deleteButton.addEventListener("click", function () {
        archiveLi.remove(); // Remove archive item when "Delete" is clicked
      });
    });
  });

  // Clear all items in the archive
  clearButton.addEventListener("click", function () {
    archiveList.innerHTML = ""; // Clear all archive items
  });
}
