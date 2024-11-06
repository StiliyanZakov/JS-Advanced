function solve() {
  let sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;
  let correctAnswers = 0;

  // Correct answers in sequence
  const correctAnswersList = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];

  // Event listener for all quiz-answer elements
  const answers = document.querySelectorAll(".quiz-answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", function () {
      const selectedAnswerText = answer.textContent.trim();

      // Check if the answer is correct
      if (correctAnswersList.includes(selectedAnswerText)) {
        correctAnswers++;
      }

      // Hide the current section
      sections[currentSectionIndex].classList.add("hidden");

      // Show the next section if available
      currentSectionIndex++;
      if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].classList.remove("hidden");
      } else {
        // Show the results
        showResults();
      }
    });
  });

  function showResults() {
    let results = document.getElementById("results");
    let resultsText = results.querySelector("h1");

    if (correctAnswers === correctAnswersList.length) {
      resultsText.textContent = "You are recognized as top JavaScript fan!";
    } else {
      resultsText.textContent = `You have ${correctAnswers} right answers`;
    }

    results.style.display = "block";
  }
}
