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
      message: "",
    };
  },
  methods: {
    writeMessage: function () {
      this.message = "User Successfully Logged Out";
    },
  },
};
</script>

<template>
  <div class="content">
    <HeaderComponent @log-out="writeMessage" />
    <RouterView :is-logged-out="message" />
    <FooterComponent class="footer-component" />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
