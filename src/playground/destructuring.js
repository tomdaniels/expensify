const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'philadelphia',
        temp: 92
    }
};

const {name, age} = person;

console.log(`${name} is ${age}.`);

const {city, temp} = person.location;

console.log(`It's ${temp} in ${city}`);