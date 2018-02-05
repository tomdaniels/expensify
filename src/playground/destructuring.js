// Object destructuring

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'philadelphia',
        temp: 98
    }
};

// Assigning default values while destructuring.

const {name = 'Anonymous', age} = person;

console.log(`${name} is ${age}.`);

// Rename constant variable names while destructuring.

const {city, temp: temperature} = person.location;
if (temperature && city) {
   // console.log(`It's ${temperature} in ${city}`);
}

// challenge. With the below book object, make console.log(publisherName); print:
// Penguin or, "Self Published" if no name property.

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);


// Array destructuring


// Array destructuring

const address = [
    '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'
];

const [, yourCity, state] = address;

console.log(`You are in ${yourCity}, ${state}`);

// challenge. with the item array, make console.log() that prints:
// A medium coffee costs 2.50

const item = ['coffee', '$2', '$2.50', '$2.75'];

const [coffee, , medium,] = item;

console.log(`a medium ${coffee} costs ${medium}`);