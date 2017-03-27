import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Initialize store

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
