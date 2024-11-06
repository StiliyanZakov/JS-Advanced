function focused() {
  // Select all input elements on the page
  const inputs = document.querySelectorAll('input[type="text"]');

  // Add event listeners to each input field
  inputs.forEach((input) => {
    // When the input gets focused, add the 'focused' class to its parent div
    input.addEventListener("focus", (event) => {
      event.target.parentElement.classList.add("focused");
    });

    // When the input loses focus, remove the 'focused' class from its parent div
    input.addEventListener("blur", (event) => {
      event.target.parentElement.classList.remove("focused");
    });
  });
}
