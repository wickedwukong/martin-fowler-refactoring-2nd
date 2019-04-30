export class Order {
    constructor(data) {
        this._priority = data.priority;
    }

    get priority() {
        return this._priority;
    }
    
    set priority(value) {
        this._priority = value;
    }
}

const orders = [new Order({priority: "normal"}), new Order({priority: "high"}), new Order({priority: "rush"})];

export const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;