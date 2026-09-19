export {};

// TypeScript variables work like JavaScript variables, but you can add types.

let courseName: string = "TypeScript Basics";
let lessonNumber: number = 1;
let isPublished: boolean = true;

console.log(courseName); // TypeScript Basics
console.log(lessonNumber); // 1
console.log(isPublished); // true

// Type inference: TypeScript can often understand the type automatically.
let instructor = "Alice";
let studentCount = 25;

console.log(`${instructor} teaches ${studentCount} students.`); // Alice teaches 25 students.

// const is used when the value should not be reassigned.
const platform: string = "VS Code";
console.log(`Learning with ${platform}`); // Learning with VS Code

// Arrays can be typed in two common ways.
let scores: number[] = [85, 90, 95];
let topics: Array<string> = ["variables", "functions", "types"];

console.log(scores); // [85, 90, 95]
console.log(topics); // ["variables", "functions", "types"]

// Objects can describe the shape of their properties.
let learner: { name: string; age: number; isActive: boolean } = {
	name: "Sam",
	age: 22,
	isActive: true,
};

console.log(learner.name); // Sam

// Union types allow more than one possible type.
let id: number | string = 101;
console.log(id); // 101

id = "TS-101";
console.log(id); // TS-101

// Enums create named values that are easier to read than plain strings or numbers.
enum CourseLevel {
	Beginner = "BEGINNER",
	Intermediate = "INTERMEDIATE",
	Advanced = "ADVANCED",
}

let currentLevel: CourseLevel = CourseLevel.Beginner;
console.log(currentLevel); // BEGINNER

// null means a value is intentionally empty.
let selectedTopic: string | null = null;
console.log(selectedTopic); // null

selectedTopic = "variables";
console.log(selectedTopic); // variables

// undefined means a value has not been assigned yet.
let nextTopic: string | undefined;
console.log(nextTopic); // undefined

nextTopic = "functions";
console.log(nextTopic); // functions

// Avoid any when possible because it turns off type checking.
let flexibleValue: any = "hello";
flexibleValue = 123;
console.log(flexibleValue); // 123
// console.log(flexibleValue.toUpperCase()); // no errors during compilation, but may fail at runtime

// unknown is safer because you must check the type before using it.
let saferValue: unknown = "typescript";

if (typeof saferValue === "string") {
	console.log(saferValue.toUpperCase()); // TYPESCRIPT
}

