<script>
// import { RouterLink } from "vue-router";
import AccountDetailComponent from "../components/AccountDetailComponent.vue";
import OverviewComponent from "../components/OverviewComponent.vue";
import TransactionComponent from "../components/TransactionComponent.vue";
export default {
  name: "DashboardView",
  components: {
    AccountDetailComponent,
    OverviewComponent,
    TransactionComponent,
  },
};
</script>

<template>
  <div class="dashboard-container">
    <AccountDetailComponent />
    <OverviewComponent />
    <TransactionComponent />
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
