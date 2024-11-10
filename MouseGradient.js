function attachGradientEvents() {
  // Get the gradient element
  const gradient = document.getElementById("gradient");

  // Add a mousemove event listener to the gradient element
  gradient.addEventListener("mousemove", function (event) {
    // Calculate the percentage of mouse position relative to the width of the gradient element
    const boxWidth = event.target.clientWidth;
    const mousePositionX = event.offsetX;

    // Calculate the percentage
    const percentage = Math.floor((mousePositionX / boxWidth) * 100);

    // Display the percentage in the result div
    document.getElementById("result").textContent = percentage + "%";
  });
}
