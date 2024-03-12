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

  /* 
  In this example:

We create a parent object animal using an object literal. It contains properties type and sound, and a method makeSound().
We create a child object dog using Object.create(animal), which sets the [[Prototype]] of dog to animal, establishing a prototype chain.
The dog object inherits the type and makeSound() method from the animal object. We override the type and sound properties in dog.
We access properties and methods from the dog object, which first checks if they exist on the object itself. If not found, JavaScript follows the prototype chain and looks for them in the animal object.
We add a new method move() to the animal object after creating the dog object. Since dog inherits from animal, it also gains access to the newly added method.
  */