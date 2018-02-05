import { createStore } from 'redux';

// have to pass createStore a function as an argument, the functions first argument will always be "state";

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
              count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
                return state;
    }
});

// Actions - object that gets sent to the store.
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());