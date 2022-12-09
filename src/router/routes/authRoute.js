export const auth = [
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "@/views/LoginView.vue"),
        meta: { requiresAuth: false, requiresVisitor: true },
    },
];
