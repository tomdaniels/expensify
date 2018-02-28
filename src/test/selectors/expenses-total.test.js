import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const response = selectExpenseTotal([]);
    expect(response).toBe(0);
});

test('should correctly add up a single expense', () => {
   const response = selectExpenseTotal([expenses[0]]);
   expect(response).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const response = selectExpenseTotal(expenses);
    expect(response).toBe(114195);
});