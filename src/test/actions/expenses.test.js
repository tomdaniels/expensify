import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should set up the add expense object with provided values', () => {
    const addAction = addExpense(expenses[2]);
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', () => {
    
});

test('should add expense with defaults to database and store', () => {

});

// test('should set up the add expense object with default values', () => {
//     const addAction = addExpense();
//     expect(addAction).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// });


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