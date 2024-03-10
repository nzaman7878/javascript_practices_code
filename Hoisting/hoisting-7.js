// Hoisting within Nested Scopes

function outerFunction() {
    console.log(y); // Output: undefined
    var y = 10;
  }
  
  outerFunction();
  