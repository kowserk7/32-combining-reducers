import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import Dashboard from '../dashboard/dashboard';
import {BrowserRouter, Route} from 'react-router-dom';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('__STATE__:', store.getState()));
    //subscription to the store. log out the state changes. listen to any changes to the store and console logs thems
  }
  render() { 
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
export default App;