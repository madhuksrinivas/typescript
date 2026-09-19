// Advanced TypeScript topics, explained with small examples.

// 1. Generics
// A generic lets a function keep the same type it receives.
function identity<Type>(value: Type): Type {
    return value;
}

console.log(identity<string>("Alice"));
console.log(identity<number>(100));

// Most of the time, TypeScript can infer the generic type automatically.
console.log(identity(true));

// 2. Generic arrays
// This function accepts an array of any item type and returns the first item.
function getFirstItem<ItemType>(items: ItemType[]): ItemType {
    return items[0];
}

console.log(getFirstItem<string>(["variables", "functions", "classes"]));
console.log(getFirstItem<number>([10, 20, 30]));

// 3. Generic constraints
// A constraint says: the type can be flexible, but it must have something.
interface HasLength {
    length: number;
}

function printLength<ValueType extends HasLength>(value: ValueType): ValueType {
    console.log(value.length);
    return value;
}

printLength("TypeScript");
printLength(["Alice", "John"]);

// 4. Type narrowing
// Narrowing means checking a value before using it as a specific type.
function formatId(id: string | number): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    }

    return id.toString();
}

console.log(formatId("ts-101"));
console.log(formatId(101));

// 5. keyof
// keyof creates a union of object property names.
type Course = {
    title: string;
    duration: number;
    isFree: boolean;
};

function getCourseValue<Key extends keyof Course>(course: Course, key: Key): Course[Key] {
    return course[key];
}

const course: Course = {
    title: "TypeScript Basics",
    duration: 6,
    isFree: true,
};

console.log(getCourseValue(course, "title"));
console.log(getCourseValue(course, "duration"));

// 6. Utility types
// Partial makes all properties optional.
type CourseUpdate = Partial<Course>;

const updateCourse: CourseUpdate = {
    duration: 8,
};

console.log(updateCourse);

// Pick creates a type with only selected properties.
type CoursePreview = Pick<Course, "title" | "isFree">;

const preview: CoursePreview = {
    title: "TypeScript Basics",
    isFree: true,
};

console.log(preview);

// 7. Mapped types
// A mapped type creates a new type by looping over another type's keys.
type ReadOnlyCourse = {
    readonly [Property in keyof Course]: Course[Property];
};

const readOnlyCourse: ReadOnlyCourse = {
    title: "Advanced TypeScript",
    duration: 10,
    isFree: false,
};

console.log(readOnlyCourse);

// 8. Discriminated unions
// Use one common property to tell TypeScript which object shape you have.
type SuccessResponse = {
    status: "success";
    data: string;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): string {
    if (response.status === "success") {
        return response.data;
    }

    return response.message;
}

console.log(handleResponse({ status: "success", data: "Course loaded" }));
console.log(handleResponse({ status: "error", message: "Course not found" }));
