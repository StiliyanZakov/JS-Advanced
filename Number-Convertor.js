function solve() {
  // Get necessary DOM elements
  const selectMenuTo = document.getElementById("selectMenuTo");
  const inputField = document.getElementById("input");
  const resultField = document.getElementById("result");
  const convertButton = document.querySelector("button");

  // Add options 'Binary' and 'Hexadecimal' to the "To" select menu
  const binaryOption = document.createElement("option");
  binaryOption.value = "binary";
  binaryOption.textContent = "Binary";

  const hexadecimalOption = document.createElement("option");
  hexadecimalOption.value = "hexadecimal";
  hexadecimalOption.textContent = "Hexadecimal";

  selectMenuTo.appendChild(binaryOption);
  selectMenuTo.appendChild(hexadecimalOption);

  // Event listener for the "Convert it" button
  convertButton.addEventListener("click", () => {
    const decimalValue = Number(inputField.value);
    const conversionType = selectMenuTo.value;

    if (conversionType === "binary") {
      // Convert to binary
      resultField.value = decimalValue.toString(2);
    } else if (conversionType === "hexadecimal") {
      // Convert to hexadecimal (upper case)
      resultField.value = decimalValue.toString(16).toUpperCase();
    }
  });
}
