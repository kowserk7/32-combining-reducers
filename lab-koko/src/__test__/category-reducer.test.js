import Reducer from '../reducers/category';

describe ('category reducer', () => {
  it ('should return the initial sate on first call', () => {
    expect(Reducer([],{})).toEqual([]);
  });
  it ('should handle CATEGORY_CREATE', () => {
    let catOne = { _id: '1234', title: 'wat', budget: 67, edit: false, timestamp: new Date() };
    let catTwo = { _id: '4567', title: 'who', budget: 89, edit: false, timestamp: new Date() };

    let state = Reducer([catOne], {
      type: 'CATEGORY_CREATE',
      payload: catTwo,
    });
    console.log(state);
    expect(state).toContain(catOne);
    expect(state).toContain(catTwo);
  });
});