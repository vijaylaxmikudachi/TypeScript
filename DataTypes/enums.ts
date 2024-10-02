//1. Numeric Enums

enum Direction {
    North,  // 0
    East,   // 1
    South,  // 2
    West    // 3
  }
  
  let myDirection: Direction = Direction.North;
  console.log(myDirection);  // Output: 0

  /*enum Direction {
    North = 1,
    East,  // 2 (automatically incremented)
    South, // 3
    West   // 4
  }
  
  console.log(Direction.East);  // Output: 2*/
  

  //2. String Enums
  enum Direction {
    North1 = "NORTH",
    East1 = "EAST",
    South1 = "SOUTH",
    West1 = "WEST"
  }
  
  let myDirection1: Direction = Direction.East;
  console.log(myDirection);  // Output: "EAST"
  
  // Accessing by member name
console.log(Direction.North);  // Output: 1

// Accessing by value
console.log(Direction[1]);  // Output: "North"












export{}