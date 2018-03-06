import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, editExpense, removeExpense, setExpenses, startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { database } from '../../firebase/firebase';
import expensesReducer from "../../reducers/expenses";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
      expenses.forEach(({ id, description, note, amount, createdAt }) => {
       expensesData[id] = { description, note, amount, createdAt };
    });
   database.ref('expenses').set(expensesData).then(() => done());
});

test('should set up the add expense object with provided values', () => {
    const addAction = addExpense(expenses[2]);
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseData
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
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
    const store = createMockStore({});
    const defaultData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
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

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
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