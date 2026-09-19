class Employee {
    employeeName;
    getEmployeeName() {
        return this.employeeName;
    }
    getName() {
        return this.employeeName;
    }
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.employeeName}.`);
    }
}
let emp = new Employee("John");
emp.greet(); // Hello, my name is John.
class Manager extends Employee {
    constructor(name) {
        super(name);
    }
    delegateTasks(employee) {
        console.log(`${this.getEmployeeName()} is delegating tasks to ${employee.getName()}.`);
    }
}
let mgr = new Manager("Alice");
mgr.delegateTasks(emp); // Alice is delegating tasks to John.
export {};
