import Dashboard from "../views/dashboard"
const router = [
    {
        path: "/home",
        name: "Dashboard",
        icon: "nc-icon nc-circle-09",
        component: Dashboard,
        layout: "/todo"
    },
]

export default router