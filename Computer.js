function createComputerHierarchy() {
  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error("Cannot instantiate an abstract class.");
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this.battery = battery; // using the setter
    }

    get battery() {
      return this._battery;
    }

    set battery(value) {
      if (!(value instanceof Battery)) {
        throw new TypeError(
          "The battery must be an instance of the Battery class."
        );
      }
      this._battery = value;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard; // using the setter
      this.monitor = monitor; // using the setter
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(value) {
      if (!(value instanceof Keyboard)) {
        throw new TypeError(
          "The keyboard must be an instance of the Keyboard class."
        );
      }
      this._keyboard = value;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(value) {
      if (!(value instanceof Monitor)) {
        throw new TypeError(
          "The monitor must be an instance of the Monitor class."
        );
      }
      this._monitor = value;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();

let Battery = classes.Battery;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Keyboard = classes.Keyboard;

// Create a battery instance
let battery = new Battery("Energy", 3);
console.log(battery);
// Output: Battery { manufacturer: 'Energy', expectedLife: 3 }

// Create a laptop instance
let laptop = new Laptop(
  "Hewlett Packard",
  2.4,
  4,
  0.5,
  3.12,
  "Silver",
  battery
);
console.log(laptop);
// Output: Laptop { manufacturer: 'Hewlett Packard', processorSpeed: 2.4, ram: 4, hardDiskSpace: 0.5, weight: 3.12, color: 'Silver', _battery: Battery { manufacturer: 'Energy', expectedLife: 3 } }

// Create monitor and keyboard instances
let monitor = new Monitor("Dell", 27, 18);
let keyboard = new Keyboard("Logitech", 50);

// Create a desktop instance
let desktop = new Desktop("Dell", 3.2, 16, 1, keyboard, monitor);
console.log(desktop);
// Output: Desktop { manufacturer: 'Dell', processorSpeed: 3.2, ram: 16, hardDiskSpace: 1, _keyboard: Keyboard { manufacturer: 'Logitech', responseTime: 50 }, _monitor: Monitor { manufacturer: 'Dell', width: 27, height: 18 } }
