<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="12">
                <b-card class="mt-3" header="Login Form">
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

                        <b-form-group label="Password:" label-for="password">
                            <b-form-input
                                id="password"
                                v-model="password"
                                type="text"
                                placeholder="Enter password"
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
        name: "LoginView",
        data() {
            return {
                email: "uhowell@example.com",
                password: "password",
            };
        },
        methods: {
            async onSubmit() {
                try {
                    await this.$axios.get("/sanctum/csrf-cookie");

                    const resLogin = await this.$axios.post("api/auth/login", {
                        email: this.email,
                        password: this.password,
                    });

                    await this.$store.dispatch(
                        "authModule/setIsAuthenticated",
                        {
                            isAuthenticated: true,
                        }
                    );

                    // await this.$store.dispatch("userModule/setUser", {
                    //     user: resLogin?.data?.user,
                    // });

                    this.$router.replace({ name: "dashboard" });
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
                this.password = "";
            },
        },
    };
</script>
