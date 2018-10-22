import Admin from '../containers/Admin/Admin'
import Frontend from '../containers/Frontend/Frontend'

const indexRoutes = [
	{ path: "/admin", component: Admin },
	{ path: "/", component: Frontend },
	// { redirect: true, path: "/register", to: "/", navbarName: "Redirect" }
];

export default indexRoutes;