function printDeckOfCards(cards) {
  // Helper function to create a card object using the previous solution
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
      toString() {
        return face + validSuits[suit];
      },
    };
  }

  // The main function that processes the deck of cards
  let result = [];

  for (let card of cards) {
    let face = card.slice(0, -1); // Extract the face (all characters except the last)
    let suit = card.slice(-1); // Extract the suit (last character)

    try {
      let cardObject = createCard(face, suit);
      result.push(cardObject.toString());
    } catch (error) {
      console.log(`Invalid card: ${card}`);
      return;
    }
  }

  // Print the valid cards, space-separated
  console.log(result.join(" "));
}

// Examples

printDeckOfCards(["AS", "10D", "KH", "2C"]); // Output: A♠ 10♦ K♥ 2♣
printDeckOfCards(["5S", "3D", "QD", "1C"]); // Output: Invalid card: 1C
