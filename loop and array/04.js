// loop an array of objects and remove all objects which dont have genders value male

var arr = [
    {name : "harsh", gender: "male"},
    {name : "harshita", gender: "female"},
    {name : "abcd", gender: "nonspecified"},
    {name : "harshi", gender: "female"},
    {name : "avni", gender: "female"},
]
// sabse pehle total non male member count lo

var count = 0;
arr.forEach(function(elem){
    if(elem.gender !== "male") count ++;
})

//ek non male bande ko hatane ka code likho
for (var i =1; i<=count; i++){
    for (var j =0; j<arr.length; j++){
    if(arr[j].gender !== "male"){
        arr.splice(j,1)
    }
}

}

// fir us  code ko total non-male chalado

console.log(arr);