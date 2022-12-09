import Vue from "vue";
import Vuex from "vuex";
import { authModule } from "./modules/authModule";
import { userModule } from "./modules/userModule";
import createPersistedState from "vuex-persistedstate";
import { ls } from "@/helpers";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        authModule,
        userModule,
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: (key) => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: (key) => ls.remove(key),
            },
        }),
    ],
});
