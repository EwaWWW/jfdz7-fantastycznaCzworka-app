import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {  Provider} from 'react-redux'

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import configureStore from './store'
const store = configureStore()

ReactDOM.render(
    <Provider store={ store }>
    <Router>
        <App />
    </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
