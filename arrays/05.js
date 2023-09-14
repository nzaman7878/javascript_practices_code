// write a javascript function to get the last element of an aray.
//passing a parameter 'n' will return the last 'n' elements of the array.

function retrieve (arr, n= 1){
    if (n<=arr.length) {
        for (var i = 0; i < n; i++){
            console.log(arr.length - 1 - i)
        }
        
    }
    else{
    console.log(n + " to elements na")
}

}
retrieve ([1,2,3,4,5],5)