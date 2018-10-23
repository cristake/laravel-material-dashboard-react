import React from 'react'
import { NavLink } from 'react-router-dom';

// import classes from './Header.css'
import frontendRoutes from '../../../routes/frontend'

const Header = () => {
	return (
		<div className="top-right links">
			{frontendRoutes.map((prop, key) => (
				<NavLink to={prop.path} key={key}>{prop.navbarName}</NavLink>
			))}
		</div>
	);
}

export default Header