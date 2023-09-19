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
freq([1,2,3,12,2,3,12,1,2,3,2121]);