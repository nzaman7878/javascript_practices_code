// write a javascript function that checks wheter a passed string is palindrome or not

function stringPalChecker(str){
    var reversed = str.split("").reverse().join("");
    if(str === reversed){
        return true;
    }
    else return false;
}

console.log(stringPalChecker("poop"));
console.log(stringPalChecker("loot"));