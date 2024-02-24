// write a function to reverse a number

function reverseNum(num){

    while(num>0){
        var rev = 0;
        var rem = num%10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
}

console.log(reverseNum(12345));