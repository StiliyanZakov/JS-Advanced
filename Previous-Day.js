function getPreviousDay(year, month, day) {
  // Create a Date object. Note: Months in JavaScript Date are zero-based (0 = January)
  let date = new Date(year, month - 1, day);

  // Subtract one day
  date.setDate(date.getDate() - 1);

  // Extract the new year, month, and day
  let prevYear = date.getFullYear();
  let prevMonth = date.getMonth() + 1; // Adjust month back to 1-based
  let prevDay = date.getDate();

  // Return the formatted string
  return `${prevYear}-${prevMonth}-${prevDay}`;
}

// Example usage:
console.log(getPreviousDay(2016, 9, 30)); // Output: 2016-9-29
console.log(getPreviousDay(2015, 5, 10)); // Output: 2015-5-9
console.log(getPreviousDay(2020, 3, 1)); // Output: 2020-2-29 (leap year)
console.log(getPreviousDay(2021, 1, 1)); // Output: 2020-12-31
