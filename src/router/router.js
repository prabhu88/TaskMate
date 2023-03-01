import Dashboard from "../views/dashboard"
import CreateTask from "../views/createTask"
import ViewTask from "../views/viewTask"
import CompletedTask from "../views/completdTask"
import PendingTask from "../views/pendingTask"
import ImportantTask from "../views/importantTask"
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
        component: ViewTask,
        layout: "/todo"
    },
    {
        path: "/completed-task",
        name: "Completed Tasks",
        icon: "nc-icon nc-circle-09",
        component: CompletedTask,
        layout: "/todo"
    },
    {
        path: "/pending-task",
        name: "Pending Tasks",
        icon: "nc-icon nc-circle-09",
        component: PendingTask,
        layout: "/todo"
    },
    {
        path: "/important-task",
        name: "Important Tasks",
        icon: "nc-icon nc-circle-09",
        component: ImportantTask,
        layout: "/todo"
    },
]

export default router