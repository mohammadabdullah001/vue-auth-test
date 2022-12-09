import { ls } from "@/helpers";
export const authModule = {
    namespaced: true,
    state: {
        isAuthenticated: false,
    },
    getters: {
        getIsAuthenticated(state) {
            return state.isAuthenticated;
        },
    },
    mutations: {
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload.isAuthenticated;
        },
    },
    actions: {
        setIsAuthenticated(context, payload) {
            context.commit("setIsAuthenticated", {
                isAuthenticated: payload.isAuthenticated,
            });
        },
        logout() {
            ls.removeAll();
            ls.clear();
        },
    },
};
