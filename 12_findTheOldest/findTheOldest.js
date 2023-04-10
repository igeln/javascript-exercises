const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    let oldestPerson = null;
    let maxAge = 0;
  
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
  
      if (age > maxAge) {
        oldestPerson = person;
        maxAge = age;
      }
    }
  
    return oldestPerson;
  };

// Do not edit below this line
module.exports = findTheOldest;

