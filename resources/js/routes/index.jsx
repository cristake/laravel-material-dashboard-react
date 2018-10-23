import Admin from "../containers/Admin/Admin";
import Frontend from "../containers/Frontend/Frontend";

const indexRoutes = [
	{ path: "/admin", component: Admin },
	{ path: "/", component: Frontend }
];

export default indexRoutes;
