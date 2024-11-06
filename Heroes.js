function solve() {
  return {
    mage: function (name) {
      return {
        name: name,
        health: 100,
        mana: 100,
        cast: function (spell) {
          this.mana--;
          console.log(`${this.name} cast ${spell}`);
        },
      };
    },
    fighter: function (name) {
      return {
        name: name,
        health: 100,
        stamina: 100,
        fight: function () {
          this.stamina--;
          console.log(`${this.name} slashes at the foe!`);
        },
      };
    },
  };
}

// Example usage:

let create = solve();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball"); // Output: Scorcher cast fireball
scorcher.cast("thunder"); // Output: Scorcher cast thunder
scorcher.cast("light"); // Output: Scorcher cast light

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight(); // Output: Scorcher 2 slashes at the foe!

console.log(scorcher2.stamina); // Output: 99
console.log(scorcher.mana); // Output: 97
