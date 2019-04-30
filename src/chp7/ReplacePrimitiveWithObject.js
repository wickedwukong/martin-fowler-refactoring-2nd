class Priority {
    constructor(value) {this._value = value;}
    toString() {return this._value;}
}

export class Order {
    constructor(data) {
        this._priority = new Priority(data.priority);
    }

    get priority() {
        return this._priority.toString();
    }

    set priority(value) {
        this._priority = new Priority(value);
    }
}

const orders = [new Order({priority: "normal"}), new Order({priority: "high"}), new Order({priority: "rush"})];

export const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;
