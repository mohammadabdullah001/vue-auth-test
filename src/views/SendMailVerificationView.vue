<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="12">
                <b-card class="mt-3" header="Dashboard">
                    <b-card-text> User Name: {{ user?.name }}</b-card-text>
                    <b-card-text> User Email:{{ user?.email }} </b-card-text>
                    <b-button
                        variant="success"
                        v-on:click.prevent="onVerifyMail"
                        >Send Verification Mail</b-button
                    >
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "SendMailVerificationView",
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
        methods: {
            async onVerifyMail() {
                try {
                    const res = await this.$axios.post(
                        "api/admin/send-verify-email"
                    );
                    // console.log(res);
                    this.$bvToast.toast(res?.data?.message, {
                        title: "Verify Mail",
                        variant: "success",
                        solid: true,
                        // autoHideDelay: 5000,
                        appendToast: true,
                        noAutoHide: true,
                    });

                    // this.$router.replace({ name: "login" });
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
