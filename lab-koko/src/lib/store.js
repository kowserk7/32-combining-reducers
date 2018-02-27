import {createStore} from 'redux';
import reducer from '../reducers'; //route to directory, using index.js as an entry point and knowing which file to use.

export default () => createStore(reducer);