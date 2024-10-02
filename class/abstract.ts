abstract class Animal {
    // An abstract method with no body, must be implemented in subclasses
    abstract makeSound(): void;
  
    // A concrete method with functionality
    move(): void {
      console.log("The animal moves");
    }
  }
  
  class Dog extends Animal {
    // Implementing the abstract method
    makeSound(): void {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animal {
    // Implementing the abstract method
    makeSound(): void {
      console.log("Meow!");
    }
  }
  
  // Trying to instantiate the abstract class directly will result in an error
  // const animal = new Animal(); // Error: Cannot create an instance of an abstract class.
  
  // Instantiating derived classes
  const dog = new Dog();
  dog.makeSound(); // Output: Woof!
  dog.move();      // Output: The animal moves
  
  const cat = new Cat();
  cat.makeSound(); // Output: Meow!
  cat.move();      // Output: The animal moves
  