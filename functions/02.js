<<<<<<< HEAD
// write a function to reverse a number

function reverseNum(num){

    while(num>0){
        var rev = 0;
        var rem = num%10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
}

=======
// write a function to reverse a number

function reverseNum(num){

    while(num>0){
        var rev = 0;
        var rem = num%10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
}

>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
console.log(reverseNum(12345));