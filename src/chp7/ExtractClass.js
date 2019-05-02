export class Person {
    constructor(name, areaCode, number){
        this._name = name;
        this._telephoneNumber = new TelephoneNumber(areaCode, number);
    }

    get name() {
        return this._name;
    }

    set name(arg) {
        this._name = arg;
    }

    get telephoneNumber() {
        return this._telephoneNumber.toString;
    }

    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }
    get officeNumber() {
        return this._telephoneNumber.number;
    }
}

class TelephoneNumber {
    constructor(area, number) {
        this._areaCode = area;
        this._number = number;
    }

    get areaCode()    {return this._areaCode;}
    set areaCode(arg) {this._areaCode = arg;}

    get number() {return this._number;}
    set number(arg) {this._number = arg;}

    get toString() {
        return `(${this._areaCode}) ${this._number}`;
    }
}