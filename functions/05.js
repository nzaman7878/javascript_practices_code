// write a javascript function that accepts a string a parameter and converts the first letter of each word of the string in upper case

function capitalizeKaro(str){
   var allwords = str.split(" ").map(function(word){
        word.charAt(0).toUppercase()+ word.substring(1)
    })
    return allwords.join(" ");
}
console.log(capitalizeKaro("zaman bhai tum kaise ho"));