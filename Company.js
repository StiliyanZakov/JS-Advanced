class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    // Validate the input
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }

    // If the department doesn't exist, create it
    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    // Add the employee to the department
    this.departments[department].push({ name, salary, position });

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDepartment = "";
    let highestAverageSalary = 0;

    // Iterate through each department and calculate the average salary
    for (let department in this.departments) {
      let totalSalary = this.departments[department].reduce(
        (sum, employee) => sum + employee.salary,
        0
      );
      let averageSalary = totalSalary / this.departments[department].length;

      // Check if this department has the highest average salary
      if (averageSalary > highestAverageSalary) {
        highestAverageSalary = averageSalary;
        bestDepartment = department;
      }
    }

    // Sort employees by salary descending and name ascending
    let sortedEmployees = this.departments[bestDepartment]
      .slice()
      .sort((a, b) => {
        return b.salary - a.salary || a.name.localeCompare(b.name);
      });

    // Build the result string
    let result = `Best Department is: ${bestDepartment}\n`;
    result += `Average salary: ${highestAverageSalary.toFixed(2)}\n`;
    sortedEmployees.forEach((employee) => {
      result += `${employee.name} ${employee.salary} ${employee.position}\n`;
    });

    return result.trim();
  }
}

// Example usage:
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
