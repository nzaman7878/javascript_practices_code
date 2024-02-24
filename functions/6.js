<<<<<<< HEAD
// write a javascript function to get the number of occurences of each letter un spcified string

function occ(str){
    var occurences = {};
    str.split("").forEach(function(elem){
        if ( occurences.hasOwnProperty(elem) === false)
        {
            occurences[elem] = 1;
        } else {
            occurences[elem] ++;
        }

    })
    return occurences;
}
console.log(occ("apple"));
=======
// write a javascript function to get the number of occurences of each letter un spcified string

function occ(str){
    var occurences = {};
    str.split("").forEach(function(elem){
        if ( occurences.hasOwnProperty(elem) === false)
        {
            occurences[elem] = 1;
        } else {
            occurences[elem] ++;
        }

    })
    return occurences;
}
console.log(occ("apple"));
>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
console.log(occ("harsh"));