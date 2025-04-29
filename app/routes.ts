import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('routes/admin/adminLayout/admin.layout.tsx', [
        route('dashboard', 'routes/admin/dashboard/dashboard.tsx'),
        route('all-users', 'routes/admin/allUsers/all.users.tsx')


    ]),
] satisfies RouteConfig;