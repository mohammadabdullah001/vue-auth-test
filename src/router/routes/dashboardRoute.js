export const dashboard = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import(/* webpackChunkName: "login" */ "@/views/DashboardView.vue"),
        meta: { requiresAuth: true },
    },
];
