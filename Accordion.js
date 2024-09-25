function toggle() {
  // Get the extra content div by ID
  const extraContent = document.getElementById("extra");

  // Get the button element by class name (the first one in the collection)
  const button = document.getElementsByClassName("button")[0];

  // Check the current display style of the extra content
  if (extraContent.style.display === "block") {
    // If it's visible, hide it and change the button text to 'More'
    extraContent.style.display = "none";
    button.textContent = "More";
  } else {
    // If it's hidden, show it and change the button text to 'Less'
    extraContent.style.display = "block";
    button.textContent = "Less";
  }
}
