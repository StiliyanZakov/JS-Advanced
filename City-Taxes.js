function cityTaxes(name, population, treasury) {
  return {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,

    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },

    applyGrowth(percentage) {
      this.population += Math.floor(this.population * (percentage / 100));
    },

    applyRecession(percentage) {
      this.treasury -= Math.floor(this.treasury * (percentage / 100));
    },
  };
}

// Example usage:
const city = cityTaxes("Tortuga", 7000, 15000);

console.log(city); // Initial city object

// Testing the methods
city.collectTaxes();
console.log(city.treasury); // Treasury after collecting taxes

city.applyGrowth(5);
console.log(city.population); // Population after 5% growth

city.applyRecession(10);
console.log(city.treasury); // Treasury after 10% recession
