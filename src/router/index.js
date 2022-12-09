import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { dashboard } from "./routes/dashboardRoute";
import { auth } from "./routes/authRoute";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    ...dashboard,
    ...auth,
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store?.state?.authModule?.isAuthenticated;
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (isAuthenticated) {
            next();
        } else {
            next({ name: "login" });
        }
    } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
        if (isAuthenticated) {
            next({ name: "dashboard" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
