// TypeScript variables work like JavaScript variables, but you can add types.
let courseName = "TypeScript Basics";
let lessonNumber = 1;
let isPublished = true;
console.log(courseName); // TypeScript Basics
console.log(lessonNumber); // 1
console.log(isPublished); // true
// Type inference: TypeScript can often understand the type automatically.
let instructor = "Alice";
let studentCount = 25;
console.log(`${instructor} teaches ${studentCount} students.`); // Alice teaches 25 students.
// const is used when the value should not be reassigned.
const platform = "VS Code";
console.log(`Learning with ${platform}`); // Learning with VS Code
// Arrays can be typed in two common ways.
let scores = [85, 90, 95];
let topics = ["variables", "functions", "types"];
console.log(scores); // [85, 90, 95]
console.log(topics); // ["variables", "functions", "types"]
// Objects can describe the shape of their properties.
let learner = {
    name: "Sam",
    age: 22,
    isActive: true,
};
console.log(learner.name); // Sam
// Union types allow more than one possible type.
let id = 101;
console.log(id); // 101
id = "TS-101";
console.log(id); // TS-101
// Enums create named values that are easier to read than plain strings or numbers.
var CourseLevel;
(function (CourseLevel) {
    CourseLevel["Beginner"] = "BEGINNER";
    CourseLevel["Intermediate"] = "INTERMEDIATE";
    CourseLevel["Advanced"] = "ADVANCED";
})(CourseLevel || (CourseLevel = {}));
let currentLevel = CourseLevel.Beginner;
console.log(currentLevel); // BEGINNER
// null means a value is intentionally empty.
let selectedTopic = null;
console.log(selectedTopic); // null
selectedTopic = "variables";
console.log(selectedTopic); // variables
// undefined means a value has not been assigned yet.
let nextTopic;
console.log(nextTopic); // undefined
nextTopic = "functions";
console.log(nextTopic); // functions
// Avoid any when possible because it turns off type checking.
let flexibleValue = "hello";
flexibleValue = 123;
console.log(flexibleValue); // 123
// console.log(flexibleValue.toUpperCase()); // no errors during compilation, but may fail at runtime
// unknown is safer because you must check the type before using it.
let saferValue = "typescript";
if (typeof saferValue === "string") {
    console.log(saferValue.toUpperCase()); // TYPESCRIPT
}
export {};
