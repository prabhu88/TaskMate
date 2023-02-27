import Dashboard from "../views/dashboard"
import CreateTask from "../views/createTask"
const router = [
    {
        path: "/home",
        name: "Dashboard",
        icon: "nc-icon nc-circle-09",
        component: Dashboard,
        layout: "/todo"
    },
    {
        path: "/create-task",
        name: "New Task",
        icon: "nc-icon nc-circle-09",
        component: CreateTask,
        layout: "/todo"
    },
    {
        path: "/view-task",
        name: "Task lists",
        icon: "nc-icon nc-circle-09",
        component: CreateTask,
        layout: "/todo"
    },
    {
        path: "/completed-task",
        name: "Completed Tasks",
        icon: "nc-icon nc-circle-09",
        component: CreateTask,
        layout: "/todo"
    },
    {
        path: "/pending-task",
        name: "Pending Tasks",
        icon: "nc-icon nc-circle-09",
        component: CreateTask,
        layout: "/todo"
    },
    {
        path: "/important-task",
        name: "Important Tasks",
        icon: "nc-icon nc-circle-09",
        component: CreateTask,
        layout: "/todo"
    },
]

export default router