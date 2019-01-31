function printBanner(console) {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

export function printOwing(invoice, console, clock) {
    let outstanding = 0;
    printBanner(console);

    // calculate outstanding
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    // record due date
    const today = clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}