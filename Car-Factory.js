function carFactory(order) {
  // Define available engine options
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  // Select the smallest engine that meets the required power
  let selectedEngine = engines.find((engine) => engine.power >= order.power);

  // Create the carriage with the specified type and color
  let carriage = {
    type: order.carriage,
    color: order.color,
  };

  // Ensure the wheelsize is an odd number (round down if necessary)
  let wheelSize =
    order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
  let wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

  // Assemble the car object
  return {
    model: order.model,
    engine: selectedEngine,
    carriage: carriage,
    wheels: wheels,
  };
}

// Example usage:

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
// Output:
// {
//   model: 'VW Golf II',
//   engine: { power: 90, volume: 1800 },
//   carriage: { type: 'hatchback', color: 'blue' },
//   wheels: [13, 13, 13, 13]
// }

console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
// Output:
// {
//   model: 'Opel Vectra',
//   engine: { power: 120, volume: 2400 },
//   carriage: { type: 'coupe', color: 'grey' },
//   wheels: [17, 17, 17, 17]
// }
