import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './Components/Routes';
import rootReducer from './Redux/Reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer, window.devToolsExtension ? window.devToolsExtension() : (f) => f,
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
