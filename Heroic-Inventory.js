function heroicInventory(input) {
  let heroes = [];

  for (let heroData of input) {
    // Ensure the input string follows the correct format before processing
    if (!heroData.includes(" / ")) {
      continue; // Skip invalid input
    }

    // Split the heroData string by " / "
    let [name, level, items] = heroData.split(" / ");

    // Parse the level from string to number
    level = Number(level);

    // Check if items are present, and split them into an array, otherwise set an empty array
    items = items ? items.split(", ") : [];

    // Create the hero object
    let hero = {
      name: name,
      level: level,
      items: items,
    };

    // Add the hero object to the heroes array
    heroes.push(hero);
  }

  // Return the JSON representation of the heroes array
  return JSON.stringify(heroes);
}

// Example usage:

console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
    "4123", // Invalid input
  ])
);
// Output:
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
//  {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
//  {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

console.log(
  heroicInventory([
    "Jake / 1000 / Gauss, HolidayGrenade",
    "12", // Invalid input
  ])
);
// Output:
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]
