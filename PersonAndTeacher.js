function personAndTeacher() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
  }

  return {
    Person,
    Teacher,
  };
}

const { Person, Teacher } = personAndTeacher();

const person = new Person("John Doe", "john.doe@example.com");
console.log(person); // Output: Person { name: 'John Doe', email: 'john.doe@example.com' }

const teacher = new Teacher(
  "Jane Smith",
  "jane.smith@example.com",
  "Mathematics"
);
console.log(teacher); // Output: Teacher { name: 'Jane Smith', email: 'jane.smith@example.com', subject: 'Mathematics' }
