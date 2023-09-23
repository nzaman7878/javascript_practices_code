// in an array of numbers and strings , only add those members which are not strings

var arr = ["eheheh",123,"hahah", 457847,"fhsdhfsh",3,4,"hfhdhs"];
 var sum = 0;

 arr.forEach(function(elem){
    if(typeof elem === "number"){
        sum = sum + elem;
    }
 })
 console.log(sum);