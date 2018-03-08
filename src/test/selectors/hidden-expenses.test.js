import hiddenExpensesTotal from '../../selectors/hidden-expenses';

test('should return the number of expenses not shown on the screen', () => {
    const totalExpenses = ['expense 1', 'expense 2', 'expense 3'];
    const visibleExpenes = ['expense 1', 'expense 2'];
    const result = hiddenExpensesTotal(totalExpenses, visibleExpenes);
    expect(result).toEqual(1);
});