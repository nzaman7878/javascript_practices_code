<<<<<<< HEAD
// write a javascript function that accepts a string a parameter and converts the first letter of each word of the string in upper case

function capitalizeKaro(str){
   var allwords = str.split(" ").map(function(word){
        word.charAt(0).toUppercase()+ word.substring(1)
    })
    return allwords.join(" ");
}
=======
// write a javascript function that accepts a string a parameter and converts the first letter of each word of the string in upper case

function capitalizeKaro(str){
   var allwords = str.split(" ").map(function(word){
        word.charAt(0).toUppercase()+ word.substring(1)
    })
    return allwords.join(" ");
}
>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
console.log(capitalizeKaro("zaman bhai tum kaise ho"));