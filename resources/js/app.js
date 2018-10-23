require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from './routes/index'

// var hist = createBrowserHistory();

const app = (
	// <Router history={hist}>
	<BrowserRouter>
		<Switch>
			{indexRoutes.map((prop, key) => {
				return <Route path={prop.path} component={prop.component} key={key} />;
			})}
		</Switch>
	</BrowserRouter>
	// </Router>
);

ReactDOM.render(app, document.getElementById('app'));
