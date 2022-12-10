<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="12">
                <b-card class="mt-3" header="Dashboard">
                    <b-card-text> User Name: {{ user?.name }}</b-card-text>
                    <b-card-text> User Email:{{ user?.email }} </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "DashboardView",
        data() {
            return {
                //
            };
        },
        computed: {
            ...mapGetters({
                user: "userModule/getUser",
            }),
        },
        async created() {
            try {
                const resLogin = await this.$axios.get("api/admin/user");

                await this.$store.dispatch("userModule/setUser", {
                    user: resLogin?.data,
                });
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
    };
</script>
