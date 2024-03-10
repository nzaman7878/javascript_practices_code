// Function Expression Hoisting

myFunction(); // Output: TypeError: myFunction is not a function

var myFunction = function() {
  console.log("Hello from myFunction!");
};
