function encodeAndDecodeMessages() {
  const [inputArea, outputArea] = document.querySelectorAll("textarea");
  const [encodeButton, decodeButton] = document.querySelectorAll("button");

  encodeButton.addEventListener("click", () => {
    let message = inputArea.value;
    let encodedMessage = message
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
      .join("");

    // Clear the input area and set the encoded message in the output area
    inputArea.value = "";
    outputArea.value = encodedMessage;
  });

  decodeButton.addEventListener("click", () => {
    let encodedMessage = outputArea.value;
    let decodedMessage = encodedMessage
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) - 1))
      .join("");

    // Set the decoded message back to the output area
    outputArea.value = decodedMessage;
  });
}
