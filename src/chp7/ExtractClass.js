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
        return this._telephoneNumber.telephoneNumber;
    }

    get officeAreaCode() {
        return this._telephoneNumber.officeAreaCode;
    }
    get officeNumber() {
        return this._telephoneNumber.officeNumber;
    }
}

class TelephoneNumber {
    constructor(area, number) {
        this._officeAreaCode = area;
        this._officeNumber = number;
    }

    get officeAreaCode()    {return this._officeAreaCode;}
    set officeAreaCode(arg) {this._officeAreaCode = arg;}

    get officeNumber() {return this._officeNumber;}
    set officeNumber(arg) {this._officeNumber = arg;}

    get telephoneNumber() {
        return `(${this._officeAreaCode}) ${this._officeNumber}`;
    }


}