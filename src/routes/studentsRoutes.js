import { lazy } from "react";

export const studentsRoutes = [
    {
        path: "/create",
        name: "Create",
        exact: true,
        component: lazy(() =>
            import("../components/students/studentForm/StudentForm")
        ),
    },
    {
        path: "/preview",
        name: "Preview",
        exact: true,
        component: lazy(() =>
            import("../components/students/studentsList/StudentsList")
        ),
    },
];
