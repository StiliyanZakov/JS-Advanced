function toStringExtension() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `Person (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }

    toString() {
      return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }

    toString() {
      return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}

const { Person, Teacher, Student } = toStringExtension();

const person = new Person("John Doe", "john.doe@example.com");
console.log(person.toString());
// Output: Person (name: John Doe, email: john.doe@example.com)

const teacher = new Teacher(
  "Jane Smith",
  "jane.smith@example.com",
  "Mathematics"
);
console.log(teacher.toString());
// Output: Teacher (name: Jane Smith, email: jane.smith@example.com, subject: Mathematics)

const student = new Student(
  "Jake Brown",
  "jake.brown@example.com",
  "Computer Science"
);
console.log(student.toString());
// Output: Student (name: Jake Brown, email: jake.brown@example.com, course: Computer Science)
