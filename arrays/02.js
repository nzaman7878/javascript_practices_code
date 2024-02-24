<<<<<<< HEAD
//write a javascript function to clone an array
function cloneArr(arr){
    var newarr = [];
    arr.forEach(function (e){
        newarr.push(e);
    })

    return newarr;
}
var abcd = [1,2,3]

var newarr = cloneArr(abcd);
=======
//write a javascript function to clone an array
function cloneArr(arr){
    var newarr = [];
    arr.forEach(function (e){
        newarr.push(e);
    })

    return newarr;
}
var abcd = [1,2,3]

var newarr = cloneArr(abcd);
>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
newarr.pop();