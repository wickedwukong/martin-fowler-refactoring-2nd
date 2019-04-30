class Priority {
    toString() {return this._value;}

    constructor(value) {
        if (Priority.legalValues().includes(value))
            this._value = value;
        else
            throw new Error(`<${value}> is invalid for Priority`);
    }
    toString() {return this._value;}
    get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() {return ['low', 'normal', 'high', 'rush'];}

    equals(other) {return this._index === other._index;}
    higherThan(other) {return this._index > other._index;}
    lowerThan(other) {return this._index < other._index;}
}

export class Order {
    constructor(data) {
        this._priority = new Priority(data.priority);
    }

    get priority() {
        return this._priority;
    }

    get priorityString() {
        return this._priority.toString();
    }

    set priorityString(value) {
        this._priority = new Priority(value);
    }
}

const orders = [new Order({priority: "normal"}), new Order({priority: "high"}), new Order({priority: "rush"})];

export const highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal"))).length;
