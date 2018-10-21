import React, { Component } from 'react'

import Layout from '../hoc/Layout/Layout'
import Landing from '../components/frontend/Landing/Landing'

class Frontend extends Component {
	render () {
		return (
			<Layout>
				<Landing />
			</Layout>
		)
	}
}

export default Frontend