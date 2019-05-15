export function reportYoungestAgeAndTotalSalary(people) {
    return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

    function totalSalary() {
        return people.reduce((total, person) => total + person.salary, 0);
    }

    function youngestAge() {
        return Math.min(...people.map(p => p.age));
    }
}
