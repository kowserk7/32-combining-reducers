import Reducer from '../reducers/expense';
require('jest');

describe ('expense reducer', () => {
  describe ('category', () => {
    it ('should return the initial sate on first call', () => {
      expect(Reducer([],{})).toEqual([]);
    });
    it ('should handle CATEGORY_CREATE', () => {
      let catOne = { _id: '12345', title: 'wat', budget: 67, edit: false, timestamp: new Date() };
      let state = Reducer({}, {
        type: 'CATEGORY_CREATE',
        payload: catOne,
      });
      console.log(state);
      
      expect(state).toEqual({ [catOne._id]: [] });
    });
    it('should handle CATEGORY_DELETE', () => {
      let catOne = { _id: '12345', title: 'wat', budget: 67, edit: false, timestamp: new Date() };
      let prevState = {'12345':[{name:'expense', budget:100 }, {name: 'expense2', budget:100}]};

      let state = Reducer(prevState, {
        type: 'CATEGORY_DELETE',
        payload: catOne,
      });
      expect(state).toEqual({});
    });
  });

  it('should handle EXPENSE_CREATE', () => {
    let expenseOne = { _id: '6789', categoryId: '12345', name: 'who', budget: '100', timestamp: new Date() };
    let expenseTwo = { _id: '9876', categoryId: '12345', name: 'why', budget: '200', timestamp: new Date() };
    let prevState = {'12345': [expenseOne]};
    let state = Reducer(prevState, {
      type: 'EXPENSE_CREATE',
      payload: expenseTwo,
    });
    expect(state['12345']).toContain(expenseOne);
    expect(state['12345']).toContain(expenseTwo);
  });

  it('should handle EXPENSE_UPDATE', () => {
    let expenseOne = { _id: '6789', categoryId: '12345', name: 'who', budget: '100', timestamp: new Date() };
    let expenseOneUpdate = { _id: '6789', categoryId: '12345', name: 'why', budget: '200', timestamp: new Date() };
    let state = Reducer({ [expenseOne.categoryId]: [expenseOne] }, {type: 'EXPENSE_UPDATE', payload: expenseOneUpdate});
    expect(state['12345']).toEqual([expenseOneUpdate]);
  });

  it('should handle EXPENSE_DELETE', () => {
    let expense = { _id: '6789', categoryId: '12345', name: 'foo', budget: '100', timestamp: new Date() };
    let state = Reducer({'12345': [expense]}, {type: 'EXPENSE_DELETE',payload: expense});
    expect(state).toEqual({ '12345': [] });
  });
});