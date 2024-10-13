function extensibleObject() {
  const obj = {
    extend(template) {
      for (let key in template) {
        if (typeof template[key] === "function") {
          // Add methods to the prototype
          Object.getPrototypeOf(this)[key] = template[key];
        } else {
          // Add properties directly to the object
          this[key] = template[key];
        }
      }
    },
  };

  return obj;
}

const myObj = extensibleObject();

console.log(myObj); // Initially: { extend: function() {...} }

const template = {
  extensionMethod: function () {
    console.log("Method called!");
  },
  extensionProperty: "someString",
};

myObj.extend(template);

console.log(myObj); // Output: { extend: function() {...}, extensionProperty: 'someString' }

myObj.extensionMethod(); // Output: 'Method called!'
console.log(myObj.extensionProperty); // Output: 'someString'
