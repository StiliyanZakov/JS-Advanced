function dayOfWeek(day) {
  // Use a switch statement to map days to numbers
  switch (day) {
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    case "Sunday":
      return 7;
    default:
      return "error";
  }
}

// Example usage:
console.log(dayOfWeek("Monday")); // Output: 1
console.log(dayOfWeek("Friday")); // Output: 5
console.log(dayOfWeek("Invalid")); // Output: error
