<script>
// import { RouterLink } from "vue-router";
import AccountDetailComponent from "../components/AccountDetailComponent.vue";
import OverviewComponent from "../components/OverviewComponent.vue";
import TransactionComponent from "../components/TransactionComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
export default {
  name: "DashboardView",
  components: {
    AccountDetailComponent,
    OverviewComponent,
    TransactionComponent,
    LoadingComponent,
  },
  props: ["userName"],
  data: function () {
    return {
      loading: false,
    };
  },
  created: function () {
    this.loading = true;
    this.load();
  },
  methods: {
    load: function () {
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<template>
  <div class="dashboard-container">
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <div v-if="this.userName && loading == false">
      <AccountDetailComponent :user-name="this.userName" />
      <OverviewComponent :user-name="this.userName" />
      <TransactionComponent />
    </div>
  </div>
</template>

<style>
.dashboard-container {
  margin: 0.8rem 0.6rem 0.5rem 0.5rem;
}
@media screen and (min-width: 491px) {
  .dashboard-container {
    margin: 0.8rem 0.7rem 0.5rem 21%;
  }
}
</style>
