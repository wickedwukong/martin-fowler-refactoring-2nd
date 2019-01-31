function printBanner(console) {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

function printDetails(invoice, outstanding, console) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}

function recordDueDate(clock, invoice) {
    const today = clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}

export function printOwing(invoice, console, clock) {
    printBanner(console);

    const outstanding = calculateOutstanding(invoice);

    recordDueDate(clock, invoice);

    printDetails(invoice, outstanding, console);


}