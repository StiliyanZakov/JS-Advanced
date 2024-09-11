function timeToWalk(steps, footprintLength, speedKmH) {
  // Calculate the total distance in meters
  const totalDistanceMeters = steps * footprintLength;

  // Convert speed from km/h to m/s
  const speedMS = (speedKmH * 1000) / 3600;

  // Calculate the time needed to walk the distance (in seconds)
  let timeSeconds = totalDistanceMeters / speedMS;

  // Calculate the number of breaks (1 minute for every 500 meters)
  const breaks = Math.floor(totalDistanceMeters / 500);
  timeSeconds += breaks * 60;

  // Round the time in seconds to avoid rounding issues
  timeSeconds = Math.round(timeSeconds);

  // Convert the time to hours, minutes, and seconds
  const hours = Math.floor(timeSeconds / 3600);
  const minutes = Math.floor((timeSeconds % 3600) / 60);
  const seconds = Math.floor(timeSeconds % 60);

  // Format and print the result
  console.log(
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`
  );
}

// Example usage:
timeToWalk(4000, 0.6, 5); // Output: 00:32:48
timeToWalk(2564, 0.7, 5.5); // Output: 00:22:35
