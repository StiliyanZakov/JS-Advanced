function fromJSONToHTMLTable(input) {
  const data = JSON.parse(input);

  // Function to escape HTML characters
  function escapeHTML(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  let html = "<table>\n";

  // Extract headers directly from the first object (no trimming)
  const headers = Object.keys(data[0]);

  // Create table headers
  html += "   <tr>";
  headers.forEach((header) => {
    html += `<th>${escapeHTML(header.trim())}</th>`; // Ensure we output trimmed headers, but don't trim the keys themselves
  });
  html += "</tr>\n";

  // Create table rows
  data.forEach((obj) => {
    html += "   <tr>";
    headers.forEach((header) => {
      const value = obj[header] !== undefined ? obj[header] : ""; // Fill with empty string if undefined
      html += `<td>${escapeHTML(String(value))}</td>`;
    });
    html += "</tr>\n";
  });

  html += "</table>";

  return html;
}

// Test case 1
const jsonString1 =
  '[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]';
console.log(fromJSONToHTMLTable(jsonString1));

// Test case 2
const jsonString2 = `[{"Name":"Pesho", "Score":4, " Grade":8}, {"Name":"Gosho", "Score":5, " Grade":8}, {"Name":"Angel", "Score":5.50, " Grade":10}]`;
console.log(fromJSONToHTMLTable(jsonString2));
