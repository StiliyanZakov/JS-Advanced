function createCard(face, suit) {
  // Define valid faces and suits
  const validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const validSuits = {
    S: "\u2660", // Spades (♠)
    H: "\u2665", // Hearts (♥)
    D: "\u2666", // Diamonds (♦)
    C: "\u2663", // Clubs (♣)
  };

  // Check if the face is valid
  if (!validFaces.includes(face)) {
    throw new Error("Invalid card face: " + face);
  }

  // Check if the suit is valid
  if (!validSuits.hasOwnProperty(suit)) {
    throw new Error("Invalid card suit: " + suit);
  }

  // Create and return the card object with a toString() method
  return {
    face,
    suit,
    toString() {
      return face + validSuits[suit];
    },
  };
}

// Examples
try {
  let card1 = createCard("A", "S");
  console.log(card1.toString()); // Output: A♠

  let card2 = createCard("10", "H");
  console.log(card2.toString()); // Output: 10♥

  let card3 = createCard("1", "C"); // This will throw an error
  console.log(card3.toString());
} catch (error) {
  console.error(error.message); // Output: Invalid card face: 1
}
