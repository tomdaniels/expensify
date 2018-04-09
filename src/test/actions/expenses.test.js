import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startAddExpense,
    startSetExpenses,
    startRemoveExpense,
    startEditExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { database } from '../../firebase/firebase';
import expensesReducer from "../../reducers/expenses";

const uid = 'thisismytestuid';
const defaultAuthState = {
    auth: { uid }
};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
      expenses.forEach(({ id, description, note, amount, createdAt }) => {
       expensesData[id] = { description, note, amount, createdAt };
    });
   database.ref(`user/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should set up the add expense object with provided values', () => {
    const addAction = addExpense(expenses[2]);
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense with defaults to database and store', () => {
    const addAction = addExpense(expenses[2]);
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        isRecurring: false
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
});


test('should set up edit expense action object', () => {
    const updates = editExpense('123abc', { createdAt: 1000} );
    expect(updates).toEqual({
        id: '123abc',
        type: 'EDIT_EXPENSE',
        updates: {
            createdAt: 1000
        }
    });
});

test('should set up remove expense action object', () => {
   const action = removeExpense({ id: '123abc' });
   expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '123abc'
   });
});

test('should remove expense from firebase, and redux store', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup set expense action object with data', () => {
   const action = setExpenses(expenses);
   expect(action).toEqual({
       type: 'SET_EXPENSES',
       expenses
   })
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
});

test('should edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {
        amount: 21045
    };
    store.dispatch(startEditExpenses(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
        }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

// test('should fetch the expenses from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         done();
//     });
// });