<script>
import { RouterLink } from "vue-router";
import LoginComponent from "../components/LoginComponent.vue";
export default {
  name: "LoginView",
  components: {
    RouterLink,
    LoginComponent,
  },
};
</script>

<template>
  <section class="section login-view">
    <LoginComponent />
  </section>
</template>

<style scoped>
.login-view {
  margin-top: var(--header-height);
}
</style>
