// loop an array of objects and remove all objects which dont have genders value male

var arr = [
    {name : "harsh", gender: "male"},
    {name : "harshita", gender: "female"},
    {name : "abcd", gender: "nonspecified"},
    {name : "harshi", gender: "female"},
    {name : "avni", gender: "female"},
]

var newarr = arr.filter(function(elem){
    return elem.gender === "male";
})

arr = newarr;