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
newarr.pop();