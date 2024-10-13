function solve() {
  // Get the input text from the textarea
  const inputText = document.getElementById("input").value;

  // Split the input text into sentences by '.'
  let sentences = inputText.split(".").filter((s) => s.trim().length > 0);

  // Clear the output div
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  // Group sentences into paragraphs of 3 sentences each
  while (sentences.length > 0) {
    // Take the first 3 sentences (if there are fewer than 3, take the remaining ones)
    const paragraphSentences =
      sentences
        .splice(0, 3)
        .map((s) => s.trim())
        .join(". ") + ".";

    // Create a paragraph with those sentences and append it to the output
    const paragraph = `<p>${paragraphSentences}</p>`;
    outputDiv.innerHTML += paragraph;
  }
}
