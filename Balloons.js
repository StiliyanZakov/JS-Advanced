function solve() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this._ribbon = { color: ribbonColor, length: ribbonLength };
    }

    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }

    get text() {
      return this._text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = solve();

let testBalloon = new classes.Balloon("yellow", 20.5);
console.log(testBalloon);
// Output: Balloon { color: 'yellow', gasWeight: 20.5 }

let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
console.log(testPartyBalloon);
// Output: PartyBalloon { color: 'yellow', gasWeight: 20.5, _ribbon: { color: 'red', length: 10.25 } }

let ribbon = testPartyBalloon.ribbon;
console.log(ribbon);
// Output: { color: 'red', length: 10.25 }

let testBirthdayBalloon = new classes.BirthdayBalloon(
  "yellow",
  20.5,
  "red",
  10.25,
  "Happy Birthday!"
);
console.log(testBirthdayBalloon);
// Output: BirthdayBalloon { color: 'yellow', gasWeight: 20.5, _ribbon: { color: 'red', length: 10.25 }, _text: 'Happy Birthday!' }

console.log(testBirthdayBalloon.text);
// Output: 'Happy Birthday!'
