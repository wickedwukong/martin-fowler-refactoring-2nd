export class Order {
    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }
    constructor(data) {
        this._priority = data.priority;
    }
}

const orders = [new Order({priority: "normal"}), new Order({priority: "high"}), new Order({priority: "rush"})];

export const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;