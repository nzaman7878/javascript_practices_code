//write a javascript function to clone an array

function cloneArr(arr){
  return arr.map(function(e){
        return e;
        })
}

var newarr = cloneArr([1,3,2,4]);