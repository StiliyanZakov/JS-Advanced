function autoEngineeringCompany(input) {
  const carRegister = new Map();

  input.forEach((line) => {
    const [brand, model, producedCars] = line.split(" | ");
    const produced = Number(producedCars);

    // Check if brand already exists
    if (!carRegister.has(brand)) {
      carRegister.set(brand, new Map());
    }

    // Check if model already exists
    const models = carRegister.get(brand);
    if (!models.has(model)) {
      models.set(model, 0);
    }

    // Add the produced cars to the current model count
    models.set(model, models.get(model) + produced);
  });

  // Output the results in the required format
  carRegister.forEach((models, brand) => {
    console.log(brand);
    models.forEach((producedCars, model) => {
      console.log(`###${model} -> ${producedCars}`);
    });
  });
}

// Example usage:
autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
