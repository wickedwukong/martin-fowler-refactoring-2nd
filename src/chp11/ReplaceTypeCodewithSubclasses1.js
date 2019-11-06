export class Employee {

    constructor(name) {
        this._name = name;
    }

    toString() {
        return `${this._name} (${this.type})`;
    }
}

export function createEmployee(name, type) {
    switch (type) {
        case "engineer":
            return new Engineer(name);
        case "salesman":
            return new Salesman(name);
        case "manager":
            return new Manager(name);
        default:
            throw new Error(`Employee cannot be of type ${type}`);
    }
}

class Engineer extends Employee {
    get type() {
        return "engineer";
    }
}

class Salesman extends Employee {
    get type() {
        return "salesman";
    }
}

class Manager extends Employee {
    get type() {
        return "manager";
    }
}
