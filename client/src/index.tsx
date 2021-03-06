import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Home from './containers/Home/Home';
import App from './App';
import configureStore from './store/configureStore';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import ItemDetails from './containers/ItemDetails/ItemDetails';
import { ItemDetailsData } from './store/itemdetails/types';
import Login from './containers/Login/Login';

const history = createBrowserHistory();
const store = configureStore({
    itemsList: {
        isLoading: true,
        items: [],
        count: 0,
        page: 1
    },
    itemsFilter: {
        name: ''
    },
    itemDetails: {
        data: {} as ItemDetailsData,
        isLoading: true
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:page(\d+)' component={Home} />
                    <Route exact path='/details/:id(\d+)' component={ItemDetails} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        </App>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
