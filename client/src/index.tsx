import React from 'react';
import ReactDOM from 'react-dom';
import { Router,  Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home'
import App from './App'
import configureStore from './store/configureStore';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App>
            <Router history={ history }>
                <Switch>
                    <Route exact path='/' component={ Home } />
                </Switch>
            </Router>
        </App>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
