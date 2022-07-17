<script>
import LoginComponent from "../components/LoginComponent.vue";
import FlashMessage from "../components/FlashMessage.vue";
export default {
  name: "LoginView",
  props: ["isLoggedOut"],
  components: {
    LoginComponent,
    FlashMessage,
  },
};
</script>

<template>
  <section class="section login-view">
    <FlashMessage :logged-out-message="isLoggedOut" />
    <LoginComponent />
  </section>
</template>

<style scoped>
.login-view {
  margin-top: var(--header-height);
}
</style>
