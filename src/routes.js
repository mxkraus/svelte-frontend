import LeftPanel from './Layout/LeftPanel.svelte';
import HomePage from './pages/Home.svelte';
import AboutPage from './pages/About.svelte';
import LoginPage from './pages/Login.svelte';
import EventPage from './pages/Events.svelte';
import EventDetail from './pages/EventDetail.svelte';
import CalendarPage from './pages/Calendar.svelte';

let routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/start",
        component: HomePage, 
    },
    {
        path:"/leftpanel",
        component: LeftPanel
    },
    {
        path: "/about",
        component: AboutPage,
    },
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/events",
        component: EventPage,
    },
    {
        path: "/detail/:evtId/",
        component: EventDetail,
    },
    {
        path: "/calendar/",
        component: CalendarPage,
    }
];

export default routes;