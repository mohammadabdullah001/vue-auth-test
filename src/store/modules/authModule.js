import { ls } from "@/helpers";

let timer;

export const authModule = {
    namespaced: true,
    state: {
        isAuthenticated: false,
        tokenExpireTime: null,
    },
    getters: {
        getIsAuthenticated(state) {
            return state.isAuthenticated;
        },
        getTokenExpireTime(state) {
            return state.tokenExpireTime;
        },
    },
    mutations: {
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload.isAuthenticated;
        },
        setTokenExpireTime(state, payload) {
            state.tokenExpireTime = payload.tokenExpireTime;
        },
    },
    actions: {
        setIsAuthenticated(context, payload) {
            context.commit("setIsAuthenticated", {
                isAuthenticated: payload.isAuthenticated,
            });
        },
        setTokenExpireTime(context, payload) {
            context.commit("setTokenExpireTime", {
                tokenExpireTime: payload.tokenExpireTime,
            });
        },
        logout() {
            ls.removeAll();
            ls.clear();
        },
        setAuthTimeout(context, payload) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                context.dispatch("setIsAuthenticated", {
                    isAuthenticated: false,
                });
            }, payload.time);
        },
    },
};
