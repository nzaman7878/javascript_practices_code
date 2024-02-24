<<<<<<< HEAD
// write a javascript function that checks wheter a passed string is palindrome or not

function stringPalChecker(str){
    var reversed = str.split("").reverse().join("");
    if(str === reversed){
        return true;
    }
    else return false;
}

console.log(stringPalChecker("poop"));
=======
// write a javascript function that checks wheter a passed string is palindrome or not

function stringPalChecker(str){
    var reversed = str.split("").reverse().join("");
    if(str === reversed){
        return true;
    }
    else return false;
}

console.log(stringPalChecker("poop"));
>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
console.log(stringPalChecker("loot"));