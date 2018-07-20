//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

//Rpoutes
import AppRoutes from './routes';

render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('root')
);
