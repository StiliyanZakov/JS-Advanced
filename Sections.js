function create(strings) {
  // Get the content element where we will append the divs
  const content = document.getElementById("content");

  // Loop through the array of strings
  strings.forEach((text) => {
    // Create a new div element
    const div = document.createElement("div");

    // Create a new paragraph element
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.style.display = "none"; // Initially hide the paragraph

    // Add an event listener to the div to show/hide the paragraph on click
    div.addEventListener("click", () => {
      paragraph.style.display = "block"; // Show the paragraph when div is clicked
    });

    // Append the paragraph to the div
    div.appendChild(paragraph);

    // Append the div to the content section
    content.appendChild(div);
  });
}
