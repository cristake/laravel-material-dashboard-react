// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";

// core components
import DashboardPage from '../components/admin/Dashboard/Dashboard';

const dashboardRoutes = [
	{
	  path: "/admin/home",
	  sidebarName: "Dashboard",
	  navbarName: "Dashboard",
	  icon: Dashboard,
	  component: DashboardPage
	},
	{ redirect: true, path: "/admin", to: "/admin/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
