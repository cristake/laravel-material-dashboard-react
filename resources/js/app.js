require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/css/admin.css";

import indexRoutes from './routes/index'

const app = (
	<BrowserRouter>
		<Switch>
			{indexRoutes.map((prop, key) => {
				return <Route path={prop.path} component={prop.component} key={key} />;
			})}
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById('app'));
