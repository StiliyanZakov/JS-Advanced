class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  // Method to add a flight
  addFlight(flightNumber, destination, departureTime, price) {
    const flightExists = this.flights.some(
      (flight) => flight.flightNumber === flightNumber
    );
    if (flightExists) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    } else {
      this.flights.push({ flightNumber, destination, departureTime, price });
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
  }

  // Method to book a flight
  bookFlight(passengerName, flightNumber) {
    const flight = this.flights.find(
      (flight) => flight.flightNumber === flightNumber
    );
    if (!flight) {
      return `Flight ${flightNumber} is not available for booking.`;
    } else {
      this.bookings.push({ passengerName, flightNumber, price: flight.price });
      this.bookingsCount++;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }
  }

  // Method to cancel a booking
  cancelBooking(passengerName, flightNumber) {
    const bookingIndex = this.bookings.findIndex(
      (booking) =>
        booking.passengerName === passengerName &&
        booking.flightNumber === flightNumber
    );
    if (bookingIndex === -1) {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    } else {
      this.bookings.splice(bookingIndex, 1);
      this.bookingsCount--;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }
  }

  // Method to show bookings based on criteria
  showBookings(criteria) {
    if (this.bookings.length === 0) {
      throw new Error("No bookings have been made yet.");
    }

    if (criteria === "all") {
      let result = `All bookings(${this.bookingsCount}):\n`;
      this.bookings.forEach((booking) => {
        result += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
      });
      return result.trim();
    }

    if (criteria === "cheap") {
      const cheapBookings = this.bookings.filter(
        (booking) => booking.price <= 100
      );
      if (cheapBookings.length === 0) {
        return "No cheap bookings found.";
      }
      let result = "Cheap bookings:\n";
      cheapBookings.forEach((booking) => {
        result += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
      });
      return result.trim();
    }

    if (criteria === "expensive") {
      const expensiveBookings = this.bookings.filter(
        (booking) => booking.price > 100
      );
      if (expensiveBookings.length === 0) {
        return "No expensive bookings found.";
      }
      let result = "Expensive bookings:\n";
      expensiveBookings.forEach((booking) => {
        result += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
      });
      return result.trim();
    }
  }
}

// Test Case 1
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// Test Case 2
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.bookFlight("Charlie", "CC303"));

// Test Case 3
console.log(system.cancelBooking("Alice", "AA101"));

// Test Case 4
console.log(system.showBookings("all"));

// Test Case 5
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
