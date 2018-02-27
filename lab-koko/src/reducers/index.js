import cardReducer from './cards';
import {combineReducers} from 'redux';
import categoryReducer from './category';

export default combineReducers({
  cards: cardReducer,
  categories:  categoryReducer,
});