//this in Functions
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, ".concat(this.name));
    };
    return Person;
}());
var person1 = new Person("Alice");
person1.greet(); // Output: Hello, Alice
//this in Arrow Functions
var Timer = /** @class */ (function () {
    function Timer() {
        this.time = 0;
    }
    Timer.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.time++; // Arrow function captures `this` from the class context
            console.log(_this.time);
        }, 1000);
    };
    return Timer;
}());
var timer = new Timer();
timer.start();
