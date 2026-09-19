export {};

// Interfaces define the shape of an object.
interface Learner {
	readonly id: number;
	name: string;
	age: number;
	isActive?: boolean;
	getSummary(): string;
}

let learner: Learner = {
	id: 1,
	name: "Sam",
	age: 22,
	// isActive: true,
	getSummary() {
		return `${this.name} is ${this.age} years old.`;
	},
};

console.log(learner.name); // Sam
console.log(learner.getSummary()); // Sam is 22 years old.

// learner.id = 2; // Error: id is readonly.
// because the `id` property is marked as `readonly` in the `Learner` interface.

function printLearnerInfo(learner: Learner): void {
	console.log(learner.id); // 1
	console.log(learner.name); // Sam
	console.log(learner.age); // 22
	console.log(learner.isActive); // true or undefined
}

printLearnerInfo(learner);

// Interfaces can also be used for arrays of objects.
let learners: Learner[] = [
	learner,
	{
		id: 2,
		name: "Priya",
		age: 24,
		getSummary() {
			return `${this.name} is learning TypeScript.`;
		},
	},
];

console.log(learners);

// Interfaces can extend other interfaces.
interface GraduateLearner extends Learner {
	certificateName: string;
}

// The `GraduateLearner` interface extends the `Learner` interface, 
// so it includes all properties and methods of `Learner` along with the additional `certificateName` property.
let graduate: GraduateLearner = {
	id: 3,
	name: "Taylor",
	age: 26,
	isActive: false,
	certificateName: "TypeScript Basics Certificate",
	getSummary() {
		return `${this.name} completed ${this.certificateName}.`;
	},
};

console.log(graduate.getSummary());
