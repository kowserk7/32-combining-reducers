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
    let changedExpenses = [...expenses, payload];
    return {...state, [categoryId]: changedExpenses};
  }
  case 'EXPENSE_UPDATE' : {
    let categoryId = payload.categoryId;
    let changedState = {...state};
    changedState[categoryId] = state[categoryId].map(expense => expense._id === payload._id ? payload : expense);
    return changedState;
  }
  case 'EXPENSE_DELETE' : {
    let categoryId = payload.categoryId;
    let changedState = {...state};
    changedState[categoryId] = state[categoryId].filter(expense => expense._id !== payload._id);
    return changedState;
  }
  case 'EXPENSE_RESET' : return {};
  default: return state;
  }
};