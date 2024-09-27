function deleteByEmail() {
  // Get the email input value
  const emailInput = document.querySelector('input[name="email"]').value;
  // Get the table rows
  const rows = document.querySelectorAll("#customers tbody tr");
  let emailFound = false;

  // Loop through the rows to find the email
  for (let row of rows) {
    const emailCell = row.cells[1].textContent;

    if (emailCell === emailInput) {
      row.remove(); // Delete the matching row
      emailFound = true;
      break;
    }
  }

  // Update the result message
  const result = document.getElementById("result");
  if (emailFound) {
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}
