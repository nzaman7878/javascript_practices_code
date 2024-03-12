/* 
Question: Explain the concept of prototypal inheritance in JavaScript and provide an example demonstrating its usage.

Answer:

Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, each object has an internal property called [[Prototype]] (also known as prototype chain) which links it to another object. When a property or method is accessed on an object, if it doesn't exist on the object itself, JavaScript looks for it in the object's prototype chain.

Example:

Let's create a simple example to demonstrate prototypal inheritance using object literals and the Object.create() method:
*/

// Parent object (prototype)
const animal = {
    type: 'Animal',
    sound: 'Make some noise!',
    makeSound() {
      console.log(this.sound);
    }
  };
  
  // Child object inheriting from the parent object
  const dog = Object.create(animal);
  dog.type = 'Dog';
  dog.sound = 'Woof!';
  
  // Accessing properties and methods
  console.log(dog.type);        // Output: Dog
  dog.makeSound();              // Output: Woof!
  
  // Adding a new method to the parent object
  animal.move = function() {
    console.log('Move like an animal');
  };
  
  // Accessing the new method from the child object
  dog.move();                   // Output: Move like an animal

  