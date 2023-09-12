// write a javascript function that reverse a number

function reverseNum(num){
   return Number(num.toString().split("").reverse().join("")) 
}
console.log(reverseNum(12));