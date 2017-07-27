import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import allReducers from './reducers/index.js';

import Layout from './components/layout.js';

const store = createStore(
                allReducers,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
              );

ReactDOM.render(<Provider store={store}>
                    <Layout/>
                </Provider>, 
                document.getElementById('app'));