import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout'
import Dashboard from '../components/admin/Dashboard/Dashboard'

class Admin extends Component {
	render () {
		const { match } = this.props;
		// console.log(match)

		return (
			<Layout>
				<Switch>
					<Route path={`${match.url}/home`} component={Dashboard} />
					{/* <Route path="`${match.url}/home`" component={Dashboard} /> */}
					{/* <Route component={NotFound} /> */}
					<Redirect to={`${match.url}/home`} />
				</Switch>
			</Layout>
		)
	}
}

export default Admin