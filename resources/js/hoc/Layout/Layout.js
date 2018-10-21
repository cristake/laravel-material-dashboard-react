import React, { Component } from 'react'

// import classes from './Layout.css'
import Aux from '../Aux/Aux'

class Layout extends Component {
	render() {
		return (
			<Aux>
				<main className="">
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout