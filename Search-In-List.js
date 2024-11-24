function search() {
  // Get the search text
  const searchText = document.getElementById("searchText").value.toLowerCase();

  // Get all list items from the unordered list with ID 'towns'
  const towns = document.querySelectorAll("#towns li");

  // Initialize a variable to count matches
  let matches = 0;

  // Loop through each town and clear previous results, check for matches
  towns.forEach((town) => {
    // Remove bold and underline for previous searches
    town.style.fontWeight = "normal";
    town.style.textDecoration = "none";

    // Check if the current town's text includes the search text
    if (town.textContent.toLowerCase().includes(searchText)) {
      // If it matches, apply bold and underline styles
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }
  });

  // Display the number of matches found
  document.getElementById("result").textContent = `${matches} matches found`;
}
