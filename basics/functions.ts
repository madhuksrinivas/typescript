export {};

// Functions can have typed parameters and typed return values.

function greet(name: string): string {
	return `Hello, ${name}!`;
}

console.log(greet("Sam")); // Hello, Sam!

function add(firstNumber: number, secondNumber: number): number {
	return firstNumber + secondNumber;
}

console.log(add(10, 5)); // 15

// Void means the function does not return a value.
function printCourse(title: string): void {
	console.log(`Course: ${title}`);
}

printCourse("TypeScript Basics"); // Course: TypeScript Basics

// Optional parameters use ? and may be undefined.
function createUsername(firstName: string, lastName?: string): string {
    // optional parameters can be union of the type and undefined 
    // so you need to check if it is defined before using it.
	if (lastName) {
		return `${firstName}.${lastName}`.toLowerCase();
	}

	return firstName.toLowerCase();
}

console.log(createUsername("Sam", "Taylor")); // sam.taylor
console.log(createUsername("Priya")); // priya

// Default parameters are used when no value is passed.
function applyDiscount(price: number, discountPercent: number = 10): number {
	return price - price * (discountPercent / 100);
}

console.log(applyDiscount(100)); // 90
console.log(applyDiscount(100, 25)); // 75

// Functions can return objects by describing the object shape.
function createCourse(title: string, durationInHours: number): { title: string; durationInHours: number; isActive: boolean } {
	return {
		title,
		durationInHours,
		isActive: true,
	};
}

console.log(createCourse("TypeScript Basics", 6)); // { title: 'TypeScript Basics', durationInHours: 6, isActive: true }

// Functions can return arrays by describing the item type.
function getTopics(): string[] {
	return ["variables", "functions", "interfaces"];
}

console.log(getTopics()); // ["variables", "functions", "interfaces"]

function getScores(): Array<number> {
	return [85, 90, 95];
}

console.log(getScores()); // [85, 90, 95]

// Arrow functions can also use types.
const multiply = (firstNumber: number, secondNumber: number): number => {
	return firstNumber * secondNumber;
};

console.log(multiply(4, 3)); // 12

// Function type aliases make reusable function shapes.
type MathOperation = (firstNumber: number, secondNumber: number) => number;

const subtract: MathOperation = (firstNumber, secondNumber) => {
	return firstNumber - secondNumber;
};

console.log(subtract(20, 8)); // 12


