function generateReport() {
  // Get the table headers (th elements) and the rows (tr elements)
  const checkboxes = document.querySelectorAll(
    'thead th input[type="checkbox"]'
  );
  const rows = document.querySelectorAll("tbody tr");
  const output = document.getElementById("output");

  const report = [];

  // Iterate through each row (each employee data)
  for (let row of rows) {
    const cells = row.children;
    const rowData = {};

    // Iterate through each checkbox and check if it is selected
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const columnName = checkbox.name;
        rowData[columnName] = cells[index].textContent.trim();
      }
    });

    // Only add rowData if it has some selected data
    if (Object.keys(rowData).length > 0) {
      report.push(rowData);
    }
  }

  // Output the JSON stringified report to the textarea
  output.value = JSON.stringify(report, null, 2);
}
