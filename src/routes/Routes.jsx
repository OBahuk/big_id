import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { InputPage } from '../pages/InputPage';
import { MapPage } from '../pages/MapPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const Routes = () => {
    return (
        <Switch>
            <Route exact component={ InputPage } path={ '/form' }/>
            <Route exact component={ MapPage } path={ '/' }/>
            <Route component = { NotFoundPage } />
        </Switch>
    );
};

//<Route exact component = { NotFoundPage } path = { book.login } />