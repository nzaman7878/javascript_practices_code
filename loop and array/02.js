<<<<<<< HEAD
// in an array of numbers and strings , only add those members which are not strings

var arr = ["eheheh",123,"hahah", 457847,"fhsdhfsh",3,4,"hfhdhs"];
 var sum = 0;

 arr.forEach(function(elem){
    if(typeof elem === "number"){
        sum = sum + elem;
    }
 })
=======
// in an array of numbers and strings , only add those members which are not strings

var arr = ["eheheh",123,"hahah", 457847,"fhsdhfsh",3,4,"hfhdhs"];
 var sum = 0;

 arr.forEach(function(elem){
    if(typeof elem === "number"){
        sum = sum + elem;
    }
 })
>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
 console.log(sum);