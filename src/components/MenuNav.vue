<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <template v-if="isAuthenticated">
            <b-link href="#" v-on:click.prevent="onLogout">Logout</b-link>
        </template>
        <template v-else>
            <router-link to="/login">Login</router-link>
        </template>
    </nav>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        name: "MenuNav",
        data() {
            return {
                //
            };
        },
        computed: {
            ...mapGetters({
                isAuthenticated: "authModule/getIsAuthenticated",
            }),
        },
        methods: {
            async onLogout() {
                try {
                    await this.$axios.post("api/auth/logout");

                    await this.$store.dispatch(
                        "authModule/setIsAuthenticated",
                        {
                            isAuthenticated: false,
                        }
                    );

                    await this.$store.dispatch("userModule/setUser", {
                        user: null,
                    });

                    this.$router.replace({ name: "login" });
                } catch (error) {
                    this.$bvToast.toast(error?.response?.data?.message, {
                        title: "Error",
                        variant: "danger",
                        solid: true,
                        // autoHideDelay: 5000,
                        appendToast: true,
                        noAutoHide: true,
                    });
                }
            },
        },
    };
</script>
