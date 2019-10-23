export class Employee {
    constructor (name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }
    get name() {return this._name;}

    get type() {
        return Employee.legalTypeCodes[this._typeCode];
    }

    static get legalTypeCodes() {
        return {"E": "Engineer", "M": "Manager", "S": "Salesman"};
    }
}

export function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
}

export function createEngineer(name) {
    return new Employee(name, 'E');
}
