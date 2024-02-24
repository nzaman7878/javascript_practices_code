<<<<<<< HEAD
// Write a javascript program to find the most frequent of an array

function freq(arr) {
    var freq = {};
    arr.forEach(function (elem){
        if (freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem] = 1;
    })
     var ans = Object.keys(freq).reduce(function (acc, num){
        return freq[acc] > freq[next] ? acc : next ;
     })
     console.log(ans);
}
=======
// Write a javascript program to find the most frequent of an array

function freq(arr) {
    var freq = {};
    arr.forEach(function (elem){
        if (freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem] = 1;
    })
     var ans = Object.keys(freq).reduce(function (acc, num){
        return freq[acc] > freq[next] ? acc : next ;
     })
     console.log(ans);
}
>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
freq([1,2,3,12,2,3,12,1,2,3,2121]);