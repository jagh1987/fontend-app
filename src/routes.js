import React from 'react';
import {Route, Switch } from 'react-router-dom'

//Components
import App  from './components/App';
import Home  from './components/Home';
import User  from './components/User';
import Question  from './components/Question';
import Page404  from './components/Page404';

const AppRoutes= () =>
<App>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/User" component={User} />
        <Route exact path="/Question" component={Question} />
        <Route exact path="/Page404" component={Page404} />
    </Switch>
</App>

export default AppRoutes;