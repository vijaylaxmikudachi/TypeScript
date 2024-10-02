//Type safety
function add(a, b) {
    return a + b;
}
add(5, 10); // Correct usage
//add(5, "10");  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
function printPersonDetails(name, age, isEligible) {
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Eligibility: ").concat(isEligible));
}
var personName = "John";
var personAge = 40;
var Eligibility = true;
printPersonDetails(personName, personAge, Eligibility);
//2. Anonymous Functions
var subtract = function (a, b) {
    return a - b;
};
var result2 = subtract(10, 5); // result2: number = 5
//Arrow
var multiply = function (a, b) {
    return a * b;
};
var result3 = multiply(4, 3); // result3: number = 12
var multiplyShort = function (a, b) { return a * b; };
//Optional Parameters
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    return "Hello, ".concat(name, "!");
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Welcome")); // Output: Welcome, Alice!
//Default Parameters
function greetWithDefault(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetWithDefault("Bob")); // Output: Hello, Bob!
console.log(greetWithDefault("Bob", "Welcome")); // Output: Welcome, Bob!
//Rest Parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// Function implementation
function double(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value + value;
    }
}
console.log(double(5)); // Output: 10
console.log(double("Hello")); // Output: HelloHello
//Void Functions
function logMessage(message) {
    console.log(message);
}
logMessage("This is a void function"); // Output: This is a void function
//Never Functions
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function infiniteLoop() {
    while (true) { }
}
//Type Annotations for Functions
// Explicit return type
function addNumbers(a, b) {
    return a + b;
}
// TypeScript infers the return type
function subtractNumbers(a, b) {
    return a - b;
}
//Function Types
// Function type with specific parameter and return types
var myFunction;
myFunction = function (x, y) { return x + y; };
console.log(myFunction(5, 10)); // Output: 15
//Functions as Parameters
function applyFunction(func, x, y) {
    return func(x, y);
}
var result4 = applyFunction(function (a, b) { return a * b; }, 5, 3);
console.log(result4); // Output: 15
