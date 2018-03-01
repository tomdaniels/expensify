import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBn156tEX2hjo_tz3FOX5wjx7DRgl85FAk",
    authDomain: "expensify-bfb62.firebaseapp.com",
    databaseURL: "https://expensify-bfb62.firebaseio.com",
    projectId: "expensify-bfb62",
    storageBucket: "expensify-bfb62.appspot.com",
    messagingSenderId: "97202112861"
};

firebase.initializeApp(config);

const database = firebase.database();

firebase.database().ref().set({
    name: 'Tom Daniels',
    age: 22,
    stressLevel: 6,
    job: {
      title: 'developer',
      company: 'Google'
    },
    location: {
        city: 'Sydney',
        country: 'Australia'
    },
}).then(() => {
    console.log('data is saved');
}).catch((error) => {
    console.log('data did not save:', error)
});


database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}).then(() => {
    consol.log('something')
}).catch((error) => {
    console.log('error', error);
});