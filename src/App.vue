<script>
import { RouterView } from "vue-router";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent,
    RouterView,
  },
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    userFill: function (n) {
      (this.user.username = n.username), (this.user.password = n.password);
    },
    userEmpty: function (n) {
      (this.user.username = n.username), (this.user.password = n.password);
    },
  },
};
</script>

<template>
  <div class="content">
    <HeaderComponent @sign-out-user="userEmpty" :user-name="user.username" />
    <RouterView @sign-user-login="userFill" :user-name="user.username" />
    <FooterComponent class="footer-component" :user-name="user.username" />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
