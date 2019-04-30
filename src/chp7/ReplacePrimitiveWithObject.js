class Priority {
    constructor(value) {this._value = value;}
    toString() {return this._value;}
}

export class Order {
    constructor(data) {
        this._priority = new Priority(data.priority);
    }

    get priorityString() {
        return this._priority.toString();
    }

    set priorityString(value) {
        this._priority = new Priority(value);
    }
}

const orders = [new Order({priority: "normal"}), new Order({priority: "high"}), new Order({priority: "rush"})];

export const highPriorityCount = orders.filter(o => "high" === o.priorityString || "rush" === o.priorityString).length;
