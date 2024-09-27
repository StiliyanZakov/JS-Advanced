function validate() {
  // Select the email input field
  const emailInput = document.getElementById("email");

  // Add event listener for the 'change' event (fires when the input loses focus)
  emailInput.addEventListener("change", function () {
    // Regular expression to validate the email format
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    // Validate the input against the regex pattern
    if (emailPattern.test(emailInput.value)) {
      // If valid, remove the 'error' class
      emailInput.classList.remove("error");
    } else {
      // If invalid, add the 'error' class
      emailInput.classList.add("error");
    }
  });
}
