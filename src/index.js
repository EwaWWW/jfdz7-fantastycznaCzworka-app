import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './setupFirebase'
import store from './store'

import Auth from './components/Authentication/Auth'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import style from './style/style.css'


import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
    <Provider store={store}>
        <Auth>
            <Router>
                <App />
            </Router>
        </Auth>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
