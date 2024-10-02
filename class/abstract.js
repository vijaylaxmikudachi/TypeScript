var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // A concrete method with functionality
    Animal.prototype.move = function () {
        console.log("The animal moves");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementing the abstract method
    Dog.prototype.makeSound = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementing the abstract method
    Cat.prototype.makeSound = function () {
        console.log("Meow!");
    };
    return Cat;
}(Animal));
// Trying to instantiate the abstract class directly will result in an error
// const animal = new Animal(); // Error: Cannot create an instance of an abstract class.
// Instantiating derived classes
var dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move(); // Output: The animal moves
var cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move(); // Output: The animal moves
