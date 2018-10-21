/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Layout from '../../hoc/Layout/Layout'
import Header from '../../components/admin/Navigation/Header/Header';
import Footer from '../../components/admin/Navigation/Footer/Footer';
import Sidebar from '../../components/admin/Navigation/Sidebar/Sidebar';

import adminRoutes from '../../routes/admin';

import dashboardStyle from './DashboardStyles.jsx';

import logo from '../../assets/img/reactlogo.png';

const switchRoutes = (
	<Switch>
		{adminRoutes.map((prop, key) => {
			if (prop.redirect)
				return <Redirect from={prop.path} to={prop.to} key={key} />;
			return <Route path={prop.path} component={prop.component} key={key} />;
		})}
	</Switch>
);

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false
		};
		this.resizeFunction = this.resizeFunction.bind(this);
	}

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};

	getRoute() {
		return this.props.location.pathname !== "/maps";
	}

	resizeFunction() {
		if (window.innerWidth >= 960) {
			this.setState({ mobileOpen: false });
		}
	}

	componentDidMount() {
		if (navigator.platform.indexOf("Win") > -1) {
			const ps = new PerfectScrollbar(this.refs.mainPanel);
		}
		window.addEventListener("resize", this.resizeFunction);
	}

	componentDidUpdate(e) {
		if (e.history.location.pathname !== e.location.pathname) {
			this.refs.mainPanel.scrollTop = 0;
			if (this.state.mobileOpen) {
				this.setState({ mobileOpen: false });
			}
		}
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resizeFunction);
	}

	render() {
		const { classes, ...rest } = this.props;

		return (
			<Layout className={classes.wrapper}>
				<Sidebar
					routes={adminRoutes}
					logoText={"Laravel Admin"}
					logo={logo}
					handleDrawerToggle={this.handleDrawerToggle}
					open={this.state.mobileOpen}
					color="blue"
					{...rest}
				/>

				<div className={classes.mainPanel} ref="mainPanel">
					<Header
						routes={adminRoutes}
						handleDrawerToggle={this.handleDrawerToggle}
						{...rest} />

					<div className={classes.content}>
						<div className={classes.container}>{switchRoutes}</div>
					</div>

					<Footer />
				</div>
			</Layout>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
