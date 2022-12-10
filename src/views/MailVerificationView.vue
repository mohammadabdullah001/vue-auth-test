<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="12">
                <b-card class="mt-3" header="Verify Mail">
                    <b-card-text> User Name: {{ user?.name }}</b-card-text>
                    <b-card-text> User Email:{{ user?.email }} </b-card-text>
                    <router-link to="/dashboard">Go Dashboard</router-link>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "MailVerificationView",
        props: {
            token: {
                type: String,
                default: "",
            },
        },
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
                const res = await this.$axios.post("api/admin/verify-email", {
                    token: this.token,
                });

                this.$bvToast.toast(res?.data?.message, {
                    title: "Verify Mail",
                    variant: "success",
                    solid: true,
                    // autoHideDelay: 5000,
                    appendToast: true,
                    noAutoHide: true,
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
