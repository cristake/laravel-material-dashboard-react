import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout'
import Landing from '../../components/frontend/Landing/Landing'

class Frontend extends Component {
	render () {
		return (
			<Layout>
				<Switch>
					<Route path="/" exact component={Landing} />
					{/* <Route component={NotFound} /> */}
					<Redirect to="/" />
				</Switch>
			</Layout>
		)
	}
}

export default Frontend