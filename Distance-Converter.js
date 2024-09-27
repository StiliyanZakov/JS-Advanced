function attachEventsListeners() {
  const convertButton = document.getElementById("convert");

  convertButton.addEventListener("click", () => {
    const inputDistance = Number(
      document.getElementById("inputDistance").value
    );
    const inputUnit = document.getElementById("inputUnits").value;
    const outputUnit = document.getElementById("outputUnits").value;

    const meters = convertToMeters(inputDistance, inputUnit);
    const result = convertFromMeters(meters, outputUnit);

    document.getElementById("outputDistance").value = result;
  });

  function convertToMeters(value, unit) {
    const conversionRates = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };
    return value * conversionRates[unit];
  }

  function convertFromMeters(value, unit) {
    const conversionRates = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };
    return value / conversionRates[unit];
  }
}
