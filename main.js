//Simple types

console.log("Hello!");

var myNumber = 23,
    myString = "Some string",
    myBool = false,
    myNull = null,
    myUndef = undefined;


console.log(myNumber);
console.log(myString);
console.log(myBool);
console.log(typeof myNull);

console.log("mike".toUpperCase());


// Objected types

var obj = {name: "Mike"},
    array = [1,2,3],
    regexp = /w+/g,
    func = function(){};

console.log("----");
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);
