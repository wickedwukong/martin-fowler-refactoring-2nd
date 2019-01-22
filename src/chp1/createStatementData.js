export {createStatementData}


class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get volumeCredits() {
        let volumeCredits = 0;
        volumeCredits += Math.max(this.performance.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === this.play.type) volumeCredits += Math.floor(this.performance.audience / 5);
        return volumeCredits
    }

    get amount() {
        let result = 0;
        switch (this.play.type) {
            case "tragedy":
                result = 40000;
                if (this.performance.audience > 30) {
                    result += 1000 * (this.performance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (this.performance.audience > 20) {
                    result += 10000 + 500 * (this.performance.audience - 20);
                }
                result += 300 * this.performance.audience;
                break;
            default:
                throw new Error(`unknown type: ${this.play.type}`);
        }
        return result;

    }
}

function createStatementData(invoice, plays) {
    let statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enhancePerformance);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    statementData.totalAmount = totalAmount(statementData);
    return statementData;

    function enhancePerformance(aPerformance) {
        const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play = calculator.play
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
        return result;
    }

    function totalVolumeCredits(statementData) {
        return statementData.performances.reduce((total, performance) => total + performance.volumeCredits, 0)
    }

    function totalAmount(statementData) {
        return statementData.performances.reduce((total, aPerformance) => total + aPerformance.amount, 0)
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

}
