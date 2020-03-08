import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import cartReducer from './Reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './Stylesheets/materialize.css';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
