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

// database.ref('expenses').push({
//     description: 'something',
//     amount: 235,
//     note: 'some note',
//     createdAt: 10000
// });

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//     .on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        });
//       });
//     console.log(expenses);
//     });

// database.ref().on('value', (snapshot) => {
//     let value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// }, (error) => {
//     console.log('error:', error);
// });
//
//
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//     }).catch((error) => {
//     console.log('error', error)
// });
//
// firebase.database().ref().set({
//     name: 'Tom Daniels',
//     age: 22,
//     stressLevel: 6,
//     job: {
//       title: 'developer',
//       company: 'Google'
//     },
//     location: {
//         city: 'Sydney',
//         country: 'Australia'
//     },
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('data did not save:', error)
// });
//
//
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('something')
// }).catch((error) => {
//     console.log('error', error);
// });
