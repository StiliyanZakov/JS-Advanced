class Hotel {
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
  }

  restockSupplies(supplies) {
    let messages = [];

    supplies.forEach((supply) => {
      const [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(" ");
      const quantity = Number(supplyQuantity);
      const price = Number(supplyTotalPrice);

      if (this.initialBudget >= price) {
        this.supplyStock[supplyName] =
          (this.supplyStock[supplyName] || 0) + quantity;
        this.initialBudget -= price;
        messages.push(`Successfully stocked ${quantity} ${supplyName}`);
      } else {
        messages.push(
          `There was not enough money to restock ${quantity} ${supplyName}`
        );
      }
    });

    return messages.join("\n");
  }

  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (this.roomAvailability[roomType]) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    }

    this.roomAvailability[roomType] = {
      neededSupplies,
      pricePerNight,
    };

    return `Great idea! Now with the ${roomType}, we have ${
      Object.keys(this.roomAvailability).length
    } types of rooms available, any other ideas?`;
  }

  showAvailableRooms() {
    const roomTypes = Object.keys(this.roomAvailability);

    if (roomTypes.length === 0) {
      return "Our rooms are not ready yet, please come back later...";
    }

    return roomTypes
      .map(
        (roomType) =>
          `${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`
      )
      .join("\n");
  }

  bookRoom(roomType) {
    if (!this.roomAvailability[roomType]) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    const { neededSupplies, pricePerNight } = this.roomAvailability[roomType];

    for (let supply of neededSupplies) {
      const [supplyName, supplyQuantity] = supply.split(" ");
      const quantityNeeded = Number(supplyQuantity);

      if (
        !this.supplyStock[supplyName] ||
        this.supplyStock[supplyName] < quantityNeeded
      ) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }

    return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
  }
}

let hotel = new Hotel(500);

console.log(
  hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"])
);
console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
