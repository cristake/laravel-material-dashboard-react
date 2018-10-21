require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Frontend from './containers/Frontend';
import Admin from './containers/Admin';

const app = (
	<BrowserRouter>
		<Switch>
			<Route path="/admin" component={Admin} />
			<Route path="/" exact component={Frontend} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render( app, document.getElementById( 'app' ) );
