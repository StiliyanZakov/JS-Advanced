class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

// Sample usage
let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person.toString()); // Output: Anna Simpson (age: 22, email: anna@yahoo.com)
