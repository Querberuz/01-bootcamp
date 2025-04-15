// Declare a constant variable `one` and assign it the number 64
const one = 64; // number

// Declare a constant variable `two` and assign it a string value
const two = "656302"; // string

// Declare a constant variable `three` with a boolean value
const three = false; // boolean

// Declare a constant variable `four` and assign it null
const four = null; // object (typeof null returns "object" due to legacy reasons in JavaScript)

// Declare a variable `five` with a floating-point number
let five = 64.55; // number

// Declare a variable `six` with a string value
let six = "Howdy!"; // string

// Declare a variable `seven` without assigning a value
let seven; // undefined

// Log the type of each variable using typeof operator
console.log(typeof one);    // "number"
console.log(typeof two);    // "string"
console.log(typeof three);  // "boolean"
console.log(typeof four);   // "object"
console.log(typeof five);   // "number"
console.log(typeof six);    // "string"
console.log(typeof seven);  // "undefined"

// Reassign the variables with different types
five = "Hello!";   // now a string
six = false;       // now a boolean
seven = 23;        // now a number

// Log the new types after reassignment
console.log(typeof five);   // "string"
console.log(typeof six);    // "boolean"
console.log(typeof seven);  // "number"


//BigInt Used to represent very large integers that cannot be represented by the normal Number type.
const big = 1234567890123456789012345678901234567890n;
//Type: "bigint"

// Create a symbol to be used as a unique, hidden key
const internalId = Symbol("bookId");

const book = {
    title: "JavaScript for Swimmers 🏊",
    author: "Marcio Pimentel",
    [internalId]: 123456789
};

console.log(book.title);  // "JavaScript for Swimmers 🏊"
console.log(book[internalId]); // 123456789 (accessible only with the Symbol)

// Nobody can accidentally overwrite the symbol property using string keys:
book["bookId"] = "oops";  // This creates a *different* key

console.log(book["bookId"]);     // "oops"
console.log(book[internalId]);   // Still 123456789, untouched ✅

// Even Object.keys won't show it:
console.log(Object.keys(book)); // ["title", "author", "bookId"]
book["bookId"] = "oopps2"
console.log(book["bookId"]);     // "oops"
console.log(book[internalId]);   // Still 123456789, untouched ✅


