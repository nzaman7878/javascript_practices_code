<<<<<<< HEAD
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

=======
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

>>>>>>> b3ff6872e1009f04c64eb88793fca0ef603fa4df
arr = newarr;