"use strict";
//1. Numeric Enums
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West"; // 3
})(Direction || (Direction = {}));
var myDirection = Direction.North;
console.log(myDirection); // Output: 0
/*enum Direction {
  North = 1,
  East,  // 2 (automatically incremented)
  South, // 3
  West   // 4
}

console.log(Direction.East);  // Output: 2*/
//2. String Enums
(function (Direction) {
    Direction["North1"] = "NORTH";
    Direction["East1"] = "EAST";
    Direction["South1"] = "SOUTH";
    Direction["West1"] = "WEST";
})(Direction || (Direction = {}));
var myDirection1 = Direction.East;
console.log(myDirection); // Output: "EAST"
// Accessing by member name
console.log(Direction.North); // Output: 1
// Accessing by value
console.log(Direction[1]); // Output: "North"
