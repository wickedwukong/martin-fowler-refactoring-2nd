export function reportYoungestAgeAndTotalSalary(people) {
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
    
    for (const p of people) {
        totalSalary += p.salary;
    }

    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
    }

    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}
