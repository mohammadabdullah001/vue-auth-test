export const userModule = {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user;
        },
    },
    actions: {
        setUser(context, payload) {
            context.commit("setUser", {
                user: payload.user,
            });
        },
    },
};
