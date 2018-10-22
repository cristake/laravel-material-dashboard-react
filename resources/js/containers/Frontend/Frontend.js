import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout'
import Header from '../../components/frontend/Navigation/Header/Header'

import frontendRoutes from '../../routes/frontend'

const switchRoutes = (
	<Switch>
		{frontendRoutes.map((prop, key) => {
			if (prop.redirect)
				return <Redirect from={prop.path} to={prop.to} key={key} />;
			return <Route path={prop.path} component={prop.component} key={key} />;
		})}
	</Switch>
);

class Frontend extends Component {
	render() {
		return (
			<Layout>
				<div className="flex-center position-ref full-height">
					<Header />
					{switchRoutes}
				</div>
			</Layout>
		)
	}
}

export default Frontend