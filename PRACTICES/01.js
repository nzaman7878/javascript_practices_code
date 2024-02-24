//given a string , reverse each word in a sentence

var str = "pyaar mohabbaat sab dokha padhle beta mouka hai";

var savedStrArray = str.split(" ")
 .map(function (word){
    return word.split("").reverse().join()
 })
 console.log(savedStrArray.join(" "));