interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  const person1: Person = {
    firstName: "vijaylaxmi",
    lastName: "Rk",
    age: 22,
  };
  
  console.log(person1.firstName);  // Output: vijaylaxmi

  //optional
  interface Student{
    firstName: string;
    lastName: string;
    age?: number;  // age is optional
  }
  
  const s1: Student = {
    firstName: "abc",
    lastName: "xyz",
  };
  
  console.log(s1.age);  // Output: undefined
  
//Readonly
interface Product {
    readonly PName: string;
    modelName: string;
  }
  
  const p1: Product = {
    PName: "Laptop",
    modelName: "L20",
  };
  
  p1.modelName = "Lenevo30";  
  // p1.PName = "mobile";  // Error: read-only property
  
  interface Greet {
    firstName: string;
    lastName: string;
    greet(): string;  // Method that returns a string
  }
  
  const greetWithMethod: Greet = {
    firstName: "vijaylaxmi",
    lastName: "RK",
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log(greetWithMethod.greet());  // Output: Hello, my name is John Doe
  
  //Function type
  interface Add {
    (a: number, b: number): number;
  }
  
  const add: Add = (x, y) => x + y;
  
  console.log(add(5, 10));  // Output: 15
  
  
  export{}