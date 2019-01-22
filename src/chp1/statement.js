export {statement}


function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
        {
            style: "currency", currency: "USD",
            minimumFractionDigits: 2
        }).format(aNumber / 100);
}


function renderPlainText(statementData) {
    let result = `Statement for ${statementData.customer}\n`;
    for (let perf of statementData.performances) {
        result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${usd(statementData.totalAmount)}\n`;
    result += `You earned ${statementData.totalVolumeCredits} credits\n`;
    return result;
}


function statement(invoice, plays) {
    let statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enhancePerformance);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    statementData.totalAmount = totalAmount(statementData);
    return renderPlainText(statementData);


    function enhancePerformance(aPerformance) {
        let result = Object.assign({}, aPerformance);
        result.play = playFor(aPerformance);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }

    function volumeCreditsFor(aPerformance) {
        let volumeCredits = 0;
        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === aPerformance.play.type) volumeCredits += Math.floor(aPerformance.audience / 5);
        return volumeCredits
    }

    function totalVolumeCredits(statementData) {
        return statementData.performances.reduce((total, performance) => total + performance.volumeCredits, 0)
    }

    function totalAmount(statementData) {
        return statementData.performances.reduce((total, aPerformance) => total + aPerformance.amount, 0)
    }


    function amountFor(aPerformance) {
        let result = 0;
        switch (aPerformance.play.type) {
            case "tragedy":
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`unknown type: ${aPerformance.play.type}`);
        }
        return result;
    }


    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
}
