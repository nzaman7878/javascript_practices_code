// Write a javascript program to compute the union of two arrays
//sample data : console.log(union([1,2,3], [100,2,1,10]));
//[1,2,3,10,100]

function union(arr1, arr2){
    return[...new Set(arr1.concat(arr2))];

}

console.log(union([1,2,3], [100,2,1,10]));