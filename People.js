function solution() {
  class Employee {
    constructor(name, age) {
      if (new.target === Employee) {
        throw new Error("Cannot instantiate abstract class Employee directly.");
      }
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
      this.currentTaskIndex = 0;
    }

    work() {
      console.log(`${this.name} ${this.tasks[this.currentTaskIndex]}`);
      this.currentTaskIndex = (this.currentTaskIndex + 1) % this.tasks.length;
    }

    collectSalary() {
      console.log(`${this.name} received ${this.salary} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push("is working on a simple task.");
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(
        "is working on a complicated task.",
        "is taking time off work.",
        "is supervising junior workers."
      );
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks.push(
        "scheduled a meeting.",
        "is preparing a quarterly report."
      );
    }

    collectSalary() {
      console.log(
        `${this.name} received ${this.salary + this.dividend} this month.`
      );
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}

const classes = solution();

const junior = new classes.Junior("Ivan", 25);
junior.work(); // Output: Ivan is working on a simple task.
junior.work(); // Output: Ivan is working on a simple task.
junior.salary = 5811;
junior.collectSalary(); // Output: Ivan received 5811 this month.

const senior = new classes.Senior("Alex", 31);
senior.work(); // Output: Alex is working on a complicated task.
senior.work(); // Output: Alex is taking time off work.
senior.work(); // Output: Alex is supervising junior workers.
senior.salary = 12050;
senior.collectSalary(); // Output: Alex received 12050 this month.

const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary(); // Output: Tom received 15000 this month.
manager.dividend = 2500;
manager.collectSalary(); // Output: Tom received 17500 this month.
