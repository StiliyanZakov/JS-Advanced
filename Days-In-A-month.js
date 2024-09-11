function daysInMonth(month, year) {
  // Create a new Date object, setting the day to 0 to get the last day of the previous month
  let days = new Date(year, month, 0).getDate();

  // Return the number of days
  return days;
}

// Example usage:
console.log(daysInMonth(1, 2012)); // Output: 31 (January 2012)
console.log(daysInMonth(2, 2021)); // Output: 28 (February 2021)
