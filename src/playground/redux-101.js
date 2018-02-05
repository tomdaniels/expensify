import { createStore } from 'redux';

// have to pass createStore a function as an argument, the functions first argument will always be "state";

const store = createStore((state = { count: 0 }) => {
    return state;
});

console.log(store.getState());