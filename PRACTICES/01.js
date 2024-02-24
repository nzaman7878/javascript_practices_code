<<<<<<< HEAD
//given a string , reverse each word in a sentence

var str = "pyaar mohabbaat sab dokha padhle beta mouka hai";

var savedStrArray = str.split(" ")
 .map(function (word){
    return word.split("").reverse().join()
 })
=======
//given a string , reverse each word in a sentence

var str = "pyaar mohabbaat sab dokha padhle beta mouka hai";

var savedStrArray = str.split(" ")
 .map(function (word){
    return word.split("").reverse().join()
 })
>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
 console.log(savedStrArray.join(" "));