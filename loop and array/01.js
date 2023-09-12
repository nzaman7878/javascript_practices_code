//loop an array and add all members of it

var arr = [1,2,3,4,5,6,7];

var sum = 0;

arr.forEach(function(elem){
    sum = sum + elem;
})
console.log(sum);