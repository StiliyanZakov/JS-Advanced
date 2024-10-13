function extendPrototype(classToExtend) {
    // Adding species property to the prototype
    classToExtend.prototype.species = 'Human';
    
    // Adding toSpeciesString method to the prototype
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
}

extendPrototype(Person);

const person = new Person('Stiki Petrov', 'stiki.petrov@example.com');
console.log(person.toSpeciesString());
// Output: I am a Human. Person (name: Stiki Petrov, email: stiki.petrov@example.com)