import { expect } from 'chai';
import {printOwing} from '../../src/chp6/PrintOwing'

class Console {
    constructor() {

    }

    log(content) {
        this._content += content;
    }

    get content() {
        return this._content;
    }
}


describe('PrintOwing', () => {
    it('should print owing', () => {
        let invoice = {
            "orders": [
                {"amount": 1}
            ],
            "customer": "JL"

        };
        printOwing(invoice, new Console());

        let expected = "***********************\n" +
            "**** Customer Owes ****\n" +
            "***********************\n" +
            "name: JL\n" +
            "amount: 1\n" +
            "due: 3/2/2000\n" +
            "***********************\n" +
            "**** Customer Owes ****\n" +
            "***********************\n" +
            "name: JL\n" +
            "amount: 1\n" +
            "due: 3/2/2000";

        expect(printOwing(invoice, console)).to.equal();

    });



});
