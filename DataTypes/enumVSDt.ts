//Enums vs. Objects

const Direction = {
    North: 1,
    East: 2,
    South: 3,
    West: 4
  };
  
  console.log(Direction.North);  // Output: 1
  // No reverse mapping here
  enum Direction1 {
    North = 1,
    East,
    South,
    West
  }
  
  console.log(Direction1.North);  // Output: 1
  console.log(Direction1[1]);     // Output: "North" (Reverse mapping)

//Enums vs. Union Types
type Direction = "North" | "East" | "South" | "West";

let myDirection: Direction = "North";
// No reverse mapping here

//Enums vs. constatnts
const NORTH = 1;
const EAST = 2;
const SOUTH = 3;
const WEST = 4;
