export {};

class Employee{
    private employeeName: string;

    protected getEmployeeName(): string {
        return this.employeeName;
    }

    public getName(): string {
        return this.employeeName;
    }

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.employeeName}.`);
    }
}

let emp = new Employee("John");
emp.greet(); // Hello, my name is John.

class Manager extends Employee{
    constructor(name: string) {
        super(name);
    }
    delegateTasks(employee: Employee) {
        console.log(`${this.getEmployeeName()} is delegating tasks to ${employee.getName()}.`);
    }
}

let mgr = new Manager("Alice");
mgr.delegateTasks(emp); // Alice is delegating tasks to John.