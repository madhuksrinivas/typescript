export {}
let message = "Hello, World!";
console.log(message);

let isBeginning: boolean = true;
let total: number = 0;
let name: string = "John Doe";
let sentence: string = `Hello, my name is ${name}.`;
let numbers: number[] = [1, 2, 3, 4, 5];
let list: Array<number> = [1, 2, 3, 4, 5];
let person: { name: string; age: number } = { name: "Alice", age: 30 };
let anything: any = "Could be anything";
let tuple: [string, number] = ["Alice", 30];
let enumExample: "Red" | "Green" | "Blue" = "Red";
enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }
let color: Color = Color.Red;
console.log(color);
let voidExample: void = undefined;
let neverExample: never;
// neverExample = (() => { throw new Error("This will never happen"); })();

let n: null = null;
let u: undefined = undefined;

let myValue: any = 10;
myValue = "Now I'm a string";
myValue = true;
myValue = { key: "value" };
myValue = [1, 2, 3];
myValue = null;
myValue = undefined;    
// myValue.toUpperCase();
// any thing we can assign if type is any and this will cause issues
// so better to use unknown instead of any

let myUnknownValue: unknown = 10;
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

