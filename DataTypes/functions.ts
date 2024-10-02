//Type safety

function add(a: number, b: number): number {
    return a + b;
  }
  
  add(5, 10);  // Correct usage
  //add(5, "10");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  
  function printPersonDetails(name: string, age: number, isEligible: boolean): void {
    console.log(`Name: ${name}, Age: ${age}, Eligibility: ${isEligible}`);
  }
  
  let personName: string = "vijaylaxmi";
  let personAge: number = 40;
  let Eligibility: boolean = true;
  
  printPersonDetails(personName, personAge, Eligibility);
  
  //2. Anonymous Functions
  const subtract = function (a: number, b: number): number {
    return a - b;
  };
  
  let result2 = subtract(10, 5);  // result2: number = 5

  //Arrow
  const multiply = (a: number, b: number): number => {
    return a * b;
  };
  
  let result3 = multiply(4, 3);  // result3: number = 12
  const multiplyShort = (a: number, b: number): number => a * b;
//Optional Parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Vijaylaxmi"));             // Output: Hello, vijaylaxmi!
console.log(greet("vijaylaxmi", "Welcome"));  // Output: Welcome, vijaylaxmi!

//Default Parameters

function greetWithDefault(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetWithDefault("abc"));               // Output: Hello, abc!
console.log(greetWithDefault("abc", "Welcome"));    // Output: Welcome, abc!

//Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // Output: 15

//Function Overloading
// Overload signatures
function double(value: number): number;
function double(value: string): string;

// Function implementation
function double(value: any): any {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value + value;
  }
}

console.log(double(5));         // Output: 10
console.log(double("Hello"));   // Output: HelloHello

//Void Functions
function logMessage(message: string): void {
  console.log(message);
}

logMessage("This is a void function");  // Output: This is a void function

//Never Functions
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function infiniteLoop(): never {
  while (true) {}
}

//Type Annotations for Functions
// Explicit return type
function addNumbers(a: number, b: number): number {
  return a + b;
}

// TypeScript infers the return type
function subtractNumbers(a: number, b: number) {
  return a - b;
}

//Function Types
// Function type with specific parameter and return types
let myFunction: (a: number, b: number) => number;

myFunction = (x: number, y: number) => x + y;

console.log(myFunction(5, 10));  // Output: 15

//Functions as Parameters
function applyFunction(func: (a: number, b: number) => number, x: number, y: number): number {
  return func(x, y);
}

let result4 = applyFunction((a, b) => a * b, 5, 3);
console.log(result4);  // Output: 15



export{}