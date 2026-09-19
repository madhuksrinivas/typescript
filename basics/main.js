let message = "Hello, World!";
console.log(message);
let isBeginning = true;
let total = 0;
let name = "John Doe";
let sentence = `Hello, my name is ${name}.`;
let numbers = [1, 2, 3, 4, 5];
let list = [1, 2, 3, 4, 5];
let person = { name: "Alice", age: 30 };
let anything = "Could be anything";
let tuple = ["Alice", 30];
let enumExample = "Red";
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let color = Color.Red;
console.log(color);
let voidExample = undefined;
let neverExample;
// neverExample = (() => { throw new Error("This will never happen"); })();
let n = null;
let u = undefined;
let myValue = 10;
myValue = "Now I'm a string";
myValue = true;
myValue = { key: "value" };
myValue = [1, 2, 3];
myValue = null;
myValue = undefined;
// myValue.toUpperCase();
// any thing we can assign if type is any and this will cause issues
// so better to use unknown instead of any
let myUnknownValue = 10;
myUnknownValue = "Now I'm a string";
myUnknownValue = true;
myUnknownValue = { key: "value" };
myUnknownValue = [1, 2, 3];
myUnknownValue = null;
myUnknownValue = undefined;
// myUnknownValue.toUpperCase(); // Error: Object is of type 'unknown'.
// we need to do type assertion or type checking before using it
if (typeof myUnknownValue === "string") {
    console.log(myUnknownValue.toUpperCase());
}
export {};
