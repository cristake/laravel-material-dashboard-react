// @material-ui/icons
import DashboardIcons from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";

// core components
import Dashboard from '../containers/Dashboard/Dashboard';

const adminRoutes = [
	{
	  path: "/admin/home",
	  sidebarName: "Dashboard",
	  navbarName: "Dashboard",
	  icon: DashboardIcons,
	  component: Dashboard
	},
	{
	  path: "/admin/test",
	  sidebarName: "Test",
	  navbarName: "Test",
	  icon: DashboardIcons,
	  component: Dashboard
	},

	{ redirect: true, path: "/admin", to: "/admin/home", navbarName: "Redirect" }
];

export default adminRoutes;
