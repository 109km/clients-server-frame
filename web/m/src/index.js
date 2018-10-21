import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import rootReducer from './models/reducers/index';
import './global.less';

const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
