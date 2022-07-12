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
};
</script>

<template>
  <div class="content"> 
    <HeaderComponent />
    <RouterView />
    <FooterComponent class="footer-component" />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
