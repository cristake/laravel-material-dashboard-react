// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import ViewList from "@material-ui/icons/ViewList";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";

// core components/views
import DashboardPage from "../views/admin/Dashboard/Dashboard";
import UserProfile from "../views/admin/UserProfile/UserProfile";
import TableList from "../views/admin/TableList/TableList";
import Typography from "../views/admin/Typography/Typography";
import Icons from "../views/admin/Icons/Icons";
import Maps from "../views/admin/Maps/Maps";
import NotificationsPage from "../views/admin/Notifications/Notifications";
import UpgradeToPro from "../views/admin/UpgradeToPro/UpgradeToPro";

const dashboardRoutes = [
  {
    path: "/admin/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/admin/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/admin/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ViewList,
    component: TableList
  },
  {
    path: "/admin/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/admin/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/admin/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/admin/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/admin/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/admin", to: "/admin/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
