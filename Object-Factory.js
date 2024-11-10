function factory(library, orders) {
  const result = [];

  for (const order of orders) {
    // Create a copy of the template object
    const product = Object.assign({}, order.template);

    // Add the requested parts (functions) from the library
    for (const part of order.parts) {
      product[part] = library[part];
    }

    // Add the fulfilled order to the result array
    result.push(product);
  }

  return result;
}

// Example usage:

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);
