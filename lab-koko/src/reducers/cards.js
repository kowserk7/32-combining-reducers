let initialState = {};

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, payload};
  case 'CATEGORY_DELTE': 
    let changedState = {...state};
    delete changedState[payload._id];
    return changedState; 
  case 'CARD_CREATE' : return; 
  case 'CARD_UPDATE' : return; 
  case 'CARD_DELETE' : return; 
  case 'CARD_RESET' : return initialState;
  default: return state;
  }
};