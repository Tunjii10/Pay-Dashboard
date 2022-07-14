<script>
import { RouterLink } from "vue-router";
import LoginComponent from "../components/LoginComponent.vue";
export default {
  name: "LoginView",
  components: {
    RouterLink,
    LoginComponent,
  },
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  emits: ["sign-user-login"],
  methods: {
    userFill: function (n) {
      (this.user.username = n.username),
        (this.user.password = n.password),
        this.$emit("signUserLogin", this.user);
    },
  },
};
</script>

<template>
  <section class="section login-view">
    <LoginComponent @sign-user="userFill" />
  </section>
</template>

<style scoped>
.login-view {
  margin-top: var(--header-height);
}
</style>
