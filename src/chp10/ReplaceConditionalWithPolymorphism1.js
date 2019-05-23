export function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}
export function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}
export function plumage(bird) {
    return createBird(bird).plumage
}
export function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        switch (this.type) {
            case 'EuropeanSwallow':
                return "average";
            case 'AfricanSwallow':
                return (this.numberOfCoconuts > 2) ? "tired" : "average";
            case 'NorwegianBlueParrot':
                return (this.voltage > 100) ? "scorched" : "beautiful";
            default:
                return "unknown";
        }
    }

    get airSpeedVelocity() {
        switch (this.type) {
            case 'EuropeanSwallow':
                return 35;
            case 'AfricanSwallow':
                return 40 - 2 * this.numberOfCoconuts;
            case 'NorwegianBlueParrot':
                return (this.isNailed) ? 0 : 10 + this.voltage / 10;
            default:
                return null;
        }
    }
}

function createBird(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorweigianBlueParrot':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}
class EuropeanSwallow extends Bird {
}

class AfricanSwallow extends Bird {
}

class NorwegianBlueParrot extends Bird {
}
