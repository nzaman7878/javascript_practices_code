// write a javaScript function that returns a passed string with letters in alphabetical order
function stringAlphabticalOrder(str){
   return str.split("").sort().join(""); 
}
console.log(stringAlphabticalOrder("apple"));
console.log(stringAlphabticalOrder("harsh"));