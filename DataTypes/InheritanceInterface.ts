interface Person {
    firstName: string;
    lastName: string;
  }
  
  interface Employee extends Person {
    employeeId: number;
  }
  
  const employee: Employee = {
    firstName: "Abc",
    lastName: "xyz",
    employeeId: 123,
  };
  
  console.log(employee.firstName);  // Output: Abc

 //Intersection Types & vs. Extending Interfaces 
 interface Address {
    street: string;
    city: string;
  }
  
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  const individual: Person & Address = {
    firstName: "Vijaylaxmi",
    lastName: "Rk",
    street: "123 Main St",
    city: "JayNagar",
  };
console.log(individual.firstName);
  //Interface Inheritance for Classes

  interface Person {
    firstName: string;
    lastName: string;
    greet(): string;
  }
  
  class Employee implements Person {
    constructor(public firstName: string, public lastName: string, public employeeId: number) {}
  
    greet() {
      return `Hello, I am ${this.firstName} ${this.lastName}, employee #${this.employeeId}`;
    }
  }
  
  const emp = new Employee("vijaylaxmi", "RK", 101);
  console.log(emp.greet());  // Output: Hello, I am vijaylaxmi RK, employee #101
  
  










  export{}