export const auth = [
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "@/views/LoginView.vue"),
        meta: { requiresAuth: false, requiresVisitor: true },
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: () =>
            import(
                /* webpackChunkName: "login" */ "@/views/ForgotPasswordView.vue"
            ),
        meta: { requiresAuth: false, requiresVisitor: true },
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: () =>
            import(
                /* webpackChunkName: "login" */ "@/views/ResetPasswordView.vue"
            ),
        meta: { requiresAuth: false, requiresVisitor: true },
        props: (route) => ({ token: route.query.token }),
    },
];
