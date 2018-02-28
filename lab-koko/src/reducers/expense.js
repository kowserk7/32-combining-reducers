export default (state = {}, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
  { let changedState = {...state};
    delete changedState[payload._id];
    return changedState;
  }
  case 'EXPENSE_CREATE' : {
    let categoryId = payload.categoryId;
    let expenses = state[categoryId];
    let updatedExpenses = [...expenses, payload];
    return {...state, [categoryId]: updatedExpenses};
  }
  case 'EXPENSE_UPDATE' : {
    let  categoryId = payload.categoryId;
    let updatedState = {...state};
    updatedState[categoryId] = state[categoryId].map(expense => expense._id === payload._id ? payload : expense);
    return updatedState;
  }
  case 'EXPENSE_DELETE' : {
    let categoryId = payload.categoryId;
    let updatedState = {...state};
    updatedState[categoryId] = state[categoryId].filter(expense => expense._id !== payload._id);
    return updatedState;
  }
  case 'EXPENSE_RESET' : return {};
  default: return state;
  }
};