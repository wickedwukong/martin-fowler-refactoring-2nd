import { expect } from 'chai';
import {printOwing} from '../../src/chp6/PrintOwing'

let Clock = {
    today: {
        getFullYear() {
            return 2000;
        },

        getMonth() {
            return 0;
        },

        getDate() {
            return 1;
        }
    }
};

class Console {
    constructor() {
      this._content = "";
    }

    log(content) {
        this._content += content + "\n";
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

        let console = new Console();

        let expected = "***********************\n" +
            "**** Customer Owes ****\n" +
            "***********************\n" +
            "name: JL\n" +
            "amount: 1\n" +
            "due: 1/31/2000\n";

        printOwing(invoice, console, Clock);

        expect(console.content).to.equal(expected);

    });



});
