<script>
import { PayService } from "../services/payService.js";
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
      userNames: [],
      userInfo: [],
      userOrders: [],
      serverError: "",
    };
  },
  created: async function () {
    try {
      this.loading = true;
      if (localStorage.getItem("USER-CRED") !== null) {
        let user_cred = JSON.parse(localStorage.getItem("USER-CRED"));
        const formData = new FormData();
        formData.append("id", user_cred.userId);

        let response = await Promise.all([
          PayService.getInfo(formData),
          PayService.fetchOrders(formData),
        ]);
        if (
          response[0].data.status !== 200 ||
          response[1].data.status !== 200
        ) {
          return (
            (this.loading = false), (this.serverError = response.data.message)
          );
        } else {
          this.userInfo = response[0].data.response;
          this.userOrders = response[1].data.response;
          this.userDetails = user_cred;
          this.loading = false;
        }
      } else {
        return this.$router.push("/");
      }
    } catch (error) {
      this.loading = false;
      this.serverError = error;
    }
  },
};
</script>

<template>
  <div class="dashboard-container">
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <div v-if="serverError" class="dashboard-server-error">
      500. Internel Server Error: {{ serverError }}
    </div>
    <div v-if="this.user !== [] && loading == false">
      <AccountDetailComponent :user-cred="this.userDetails" />
      <OverviewComponent
        :user-infos="this.userInfo"
        :user-cred="this.userDetails"
      />
      <TransactionComponent :user-orders="this.userOrders" />
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  margin: 0.8rem 0.6rem 0.5rem 0.5rem;
}
@media screen and (min-width: 491px) {
  .dashboard-container {
    margin: 0.8rem 0.7rem 0.5rem 21%;
  }
}
.dashboard-server-error {
  font-size: var(--big-font-size);
  font-weight: var(--font-semi-bold);
  margin-top: 5rem;
}
</style>
