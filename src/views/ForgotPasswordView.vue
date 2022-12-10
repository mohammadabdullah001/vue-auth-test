<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="12">
                <b-card class="mt-3" header="Forgot Password">
                    <b-form
                        v-on:submit.prevent="onSubmit"
                        v-on:reset.prevent="onReset"
                    >
                        <b-form-group
                            label="Email address:"
                            label-for="email"
                            description="We'll never share your email with anyone else."
                        >
                            <b-form-input
                                id="email"
                                v-model="email"
                                type="email"
                                placeholder="Enter email"
                            ></b-form-input>
                        </b-form-group>

                        <div class="mt-2">
                            <b-button
                                type="submit"
                                variant="primary"
                                class="mr-2"
                                >Submit</b-button
                            >
                            <b-button type="reset" variant="danger"
                                >Reset</b-button
                            >
                        </div>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "ForgotPasswordView",
        data() {
            return {
                email: "uhowell@example.com",
            };
        },
        methods: {
            async onSubmit() {
                try {
                    await this.$axios.get("/sanctum/csrf-cookie");

                    const res = await this.$axios.post(
                        "api/auth/forgot-password",
                        {
                            email: this.email,
                        }
                    );

                    this.$bvToast.toast(res?.data?.message, {
                        title: "Forgot Password",
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
            onReset() {
                this.email = "";
            },
        },
    };
</script>
