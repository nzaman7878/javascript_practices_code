// write a javascript program to shuffle an array
function shuffleKaro(arr){
    // sabse pehle kitna area shuffle area hai
    var shuffleArea = arr.length;
    // ek random number nikalo
while (totalShuffleArea > 0){
    
    totalShuffleArea--;

    var indexTobeExchanged = Math.floor(Math.random() * totalShuffleArea)

     var temp = arr[totalShuffleArea];
     arr[totalShuffleArea] = arr[indexTobeExchanged];
     arr[indexTobeExchanged] = temp;
}
return arr;

}

console.log(shuffleKaro([1,2,3,4,5,6,7]));