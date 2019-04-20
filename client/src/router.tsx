import * as React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home'

export const routes = <App>
    <Route exact path='/' component={ Home } />
</App>;