import uuid from 'uuid/v4';

export const expenseCreate = expense => {
  expense._id = uuid();
  expense.timestamp = new Date();
  return  {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};
export const expenseUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});
export const expenseDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});
export const categoryReset = () => ({ type: 'EXPENSE_RESET' });