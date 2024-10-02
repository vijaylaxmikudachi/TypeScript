//this in Functions
class Person {
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }
    
    greet(this: Person): void {
      console.log(`Hello, ${this.name}`);
    }
  }
  
  const person1 = new Person("vijaylaxmi");
  person1.greet();  // Output: Hello, Alice

  //this in Arrow Functions
  class Timer {
    time: number = 0;
  
    start() {
      setInterval(() => {
        this.time++;  // Arrow function captures `this` from the class context
        console.log(this.time);
      }, 1000);
    }
  }
  
  const timer = new Timer();
  timer.start();
  