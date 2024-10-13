function filterEmployees(data, criteria) {
  // Parse the JSON data
  const employees = JSON.parse(data);

  // Check if the criteria is 'all'
  if (criteria === "all") {
    employees.forEach((employee, index) => {
      console.log(
        `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
      );
    });
    return;
  }

  // Extract the property and value from the criteria string
  const [property, value] = criteria.split("-");

  // Filter the employees based on the given property and value
  const filteredEmployees = employees.filter(
    (employee) => employee[property] === value
  );

  // Print the filtered employees
  filteredEmployees.forEach((employee, index) => {
    console.log(
      `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
    );
  });
}

// Sample Input
const data = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;

const criteria = "gender-Female";

// Calling the function
filterEmployees(data, criteria);
