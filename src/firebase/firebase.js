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

export { database, firebase };