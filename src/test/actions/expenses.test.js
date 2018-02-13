import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up the add expense object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last month'
    };
    const addAction = addExpense(expenseData);
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up the add expense object with default values', () => {
    const addAction = addExpense();
    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
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