function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
      let nameParts = value.split(" ");
      if (nameParts.length === 2) {
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
      }
    },
  };
}

// Example usage:
let person = createPerson("Peter", "Ivanov");

console.log(person.fullName); // Peter Ivanov

person.firstName = "George";
console.log(person.fullName); // George Ivanov

person.lastName = "Peterson";
console.log(person.fullName); // George Peterson

person.fullName = "Nikola Tesla";
console.log(person.firstName); // Nikola
console.log(person.lastName); // Tesla

let person2 = createPerson("Albert", "Simpson");
console.log(person2.fullName); // Albert Simpson

person2.firstName = "Simon";
console.log(person2.fullName); // Simon Simpson

person2.fullName = "Peter";
console.log(person2.firstName); // Simon (Invalid, doesn't change)
console.log(person2.lastName); // Simpson (Invalid, doesn't change)
