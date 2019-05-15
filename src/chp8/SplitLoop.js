export function reportYoungestAgeAndTotalSalary(people) {
    return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

    function totalSalary() {
        return people.reduce((total, person) => total + person.salary, 0);
    }

    function youngestAge() {
        return people.map(person => person.age).sort()[0];
    }
}
