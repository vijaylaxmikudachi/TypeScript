//Enums vs. Objects
var Direction = {
    North: 1,
    East: 2,
    South: 3,
    West: 4
};
console.log(Direction.North); // Output: 1
// No reverse mapping here
var Direction1;
(function (Direction1) {
    Direction1[Direction1["North"] = 1] = "North";
    Direction1[Direction1["East"] = 2] = "East";
    Direction1[Direction1["South"] = 3] = "South";
    Direction1[Direction1["West"] = 4] = "West";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.North); // Output: 1
console.log(Direction1[1]); // Output: "North" (Reverse mapping)
var myDirection = "North";
// No reverse mapping here
//Enums vs. constatnts
var NORTH = 1;
var EAST = 2;
var SOUTH = 3;
var WEST = 4;
