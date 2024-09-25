function createAssemblyLine() {
  return {
    hasClima(car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = function () {
        if (car.temp < car.tempSettings) {
          car.temp += 1;
        } else if (car.temp > car.tempSettings) {
          car.temp -= 1;
        }
      };
    },

    hasAudio(car) {
      car.currentTrack = null;
      car.nowPlaying = function () {
        if (car.currentTrack !== null) {
          console.log(
            `Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`
          );
        }
      };
    },

    hasParktronic(car) {
      car.checkDistance = function (distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log(""); // No sound if distance >= 0.5
        }
      };
    },
  };
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

// Add climate control
assemblyLine.hasClima(myCar);
console.log(myCar.temp); // 21
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp); // 20

// Add audio system
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying(); // Now playing 'Never Gonna Give You Up' by Rick Astley

// Add parktronic
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4); // Beep!
myCar.checkDistance(0.2); // Beep! Beep!

// Print the final car object
console.log(myCar);
