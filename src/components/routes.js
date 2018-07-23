import React from 'react';
import {Route, Switch } from 'react-router-dom';
//Components
import RoutedComponent  from './RoutedComponent';
import Home  from './Home';
import User  from './User';
import Counter  from './Counter/';
import Page404  from './Page404';

const AppRoutes= () =>
<RoutedComponent>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/User" component={User} />
        <Route exact path="/Counter" component={Counter} />
        <Route exact path="/Page404" component={Page404} />
    </Switch>
</RoutedComponent>

export default AppRoutes;