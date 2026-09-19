"use strict";
// Advanced TypeScript topics, explained with small examples.
// 1. Generics
// A generic lets a function keep the same type it receives.
function identity(value) {
    return value;
}
console.log(identity("Alice"));
console.log(identity(100));
// Most of the time, TypeScript can infer the generic type automatically.
console.log(identity(true));
// 2. Generic arrays
// This function accepts an array of any item type and returns the first item.
function getFirstItem(items) {
    return items[0];
}
console.log(getFirstItem(["variables", "functions", "classes"]));
console.log(getFirstItem([10, 20, 30]));
function printLength(value) {
    console.log(value.length);
    return value;
}
printLength("TypeScript");
printLength(["Alice", "John"]);
// 4. Type narrowing
// Narrowing means checking a value before using it as a specific type.
function formatId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id.toString();
}
console.log(formatId("ts-101"));
console.log(formatId(101));
function getCourseValue(course, key) {
    return course[key];
}
const course = {
    title: "TypeScript Basics",
    duration: 6,
    isFree: true,
};
console.log(getCourseValue(course, "title"));
console.log(getCourseValue(course, "duration"));
const updateCourse = {
    duration: 8,
};
console.log(updateCourse);
const preview = {
    title: "TypeScript Basics",
    isFree: true,
};
console.log(preview);
const readOnlyCourse = {
    title: "Advanced TypeScript",
    duration: 10,
    isFree: false,
};
console.log(readOnlyCourse);
function handleResponse(response) {
    if (response.status === "success") {
        return response.data;
    }
    return response.message;
}
console.log(handleResponse({ status: "success", data: "Course loaded" }));
console.log(handleResponse({ status: "error", message: "Course not found" }));
