const findTheOldest = function(people) {
    
    let ageArray = [];
    for (person of people) {
        let name = person.name;

        let age = person.yearOfDeath - person.yearOfBirth;

        if (isNaN(age)) {
            currentDate = new Date().getFullYear();
            age = currentDate - person.yearOfBirth;
        }

        let ageObject = {
            name,
            age
        }
        ageArray.push(ageObject);
    }
    
    const oldest = ageArray.sort((a,b) => {
        const firstPerson = a.age;        const nextPerson = b.age;

        return firstPerson > nextPerson ? -1 : 1;
    })

    let oldestName = oldest[0];
    return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;
