export class Order {
    constructor(data) {
        this.priority = data.priority;
    }
}

const orders = [new Order({priority: "normal"}), new Order({priority: "high"}), new Order({priority: "rush"})];

export const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;