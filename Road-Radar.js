function roadRadar(speed, area) {
  let speedLimit;

  // Determine speed limit based on the area
  switch (area) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
    default:
      console.log("Unknown area");
      return;
  }

  // Check if the driver is within the limit
  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    let difference = speed - speedLimit;
    let status;

    // Determine the severity of the infraction
    if (difference <= 20) {
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    // Print the infraction message
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}

// Example usage:
roadRadar(40, "city"); // Output: Driving 40 km/h in a 50 zone
roadRadar(21, "residential"); // Output: The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, "interstate"); // Output: The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, "motorway"); // Output: The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
