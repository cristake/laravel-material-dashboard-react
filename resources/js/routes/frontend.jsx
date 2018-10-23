import LandingPage from "../views/frontend/LandingPage/LandingPage";
import ProfilePage from "../views/frontend/ProfilePage/ProfilePage";
import LoginPage from "../views/frontend/LoginPage/LoginPage";

var indexRoutes = [
	{ path: "/profile", name: "ProfilePage", component: ProfilePage },
	{ path: "/login", name: "LoginPage", component: LoginPage },
	{ path: "/", name: "LandingPage", component: LandingPage },
];

export default indexRoutes;