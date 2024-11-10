function pieceOfPie(pies, startFlavor, endFlavor) {
  // Find the start and end index of the section
  let startIndex = pies.indexOf(startFlavor);
  let endIndex = pies.indexOf(endFlavor);

  // Slice the array from start to end (inclusive)
  return pies.slice(startIndex, endIndex + 1);
}

// Test cases
console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
// Output: ['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']

console.log(
  pieceOfPie(
    [
      "Apple Crisp",
      "Mississippi Mud Pie",
      "Pot Pie",
      "Steak and Cheese Pie",
      "Butter Chicken Pie",
      "Smoked Fish Pie",
    ],
    "Pot Pie",
    "Smoked Fish Pie"
  )
);
// Output: ['Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']
