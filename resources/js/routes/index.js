import Landing from '../components/frontend/Landing/Landing';

const indexRoutes = [
	{ path: "/", component: Landing },
	{ redirect: true, path: "/register", to: "/", navbarName: "Redirect" }
];

export default indexRoutes;