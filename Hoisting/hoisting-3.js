myFunction(); // Output: "Hello from myFunction!"

function myFunction() {
  console.log("Hello from myFunction!");
}

// Explanation:

// Even though we call myFunction() before its declaration, JavaScript does not throw an error. Instead, it successfully executes the function and logs "Hello from myFunction!" to the console.
// This is because function declarations are hoisted to the top of their containing scope during the compilation phase. 
// So, function myFunction() is moved to the top, allowing us to call myFunction() before its actual declaration.