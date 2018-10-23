// @material-ui/icons

// core components
import Landing from '../views/frontend/Landing/Landing'
import Login from '../views/frontend/Login/Login'
import Register from '../views/frontend/Register/Register'

const frontendRoutes = [
	{
		path: "/home",
		// sidebarName: "Dashboard",
		navbarName: "Home",
		// icon: DashboardIcons,
		component: Landing
	},

	{
		path: "/login",
		navbarName: "Login",
		component: Login
	},

	{
		path: "/register",
		navbarName: "Register",
		component: Register
	},

	{ redirect: true, path: "/", to: "/home" }
];

export default frontendRoutes;