<script>
// import { RouterLink } from "vue-router";
export default {
  name: "TransactionComponent",
  components: {
    // RouterLink,
  },
  props: ["userOrders"],
};
</script>

<template>
  <div class="transaction-container">
    <div class="table-title">
      <p>Transaction History</p>
    </div>
    <div>
      <table class="table">
        <tr class="table-row-header">
          <th>Description</th>
          <th class="time">Date & Time</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Commission</th>
        </tr>
        <div v-for="userOrder in userOrders">
          <tr>
            <td>{{ userOrder.description }}</td>
            <td class="time">{{ userOrder.created_at }}</td>
            <td>
              <span>{{ userOrder.currency_code }}</span
              >{{ userOrder.amount }}
            </td>
            <td class="status completed">
              <svg
                class="status-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00FF00"
                  d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"
                />
              </svg>
              {{ userOrder.status }}
            </td>
            <td>{{ userOrder.commission }}</td>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 490px) {
  .table .time {
    display: none;
  }
  .table td {
    padding: 0.3rem;
  }

  .table td {
    border-top: 1px solid;
    border-color: var(--background-header-bg);
  }
}
.transaction-container {
  width: 100%;
  margin: 1rem 0 1rem 0;
}
.table {
  width: 100%;
}
.table-title {
  font-weight: var(--font-semi-bold);
  font-size: var(--h3-font-size);
  margin: var(--mb-0-5) 0 var(--mb-0-5) 0;
}

.table-row-header th {
  text-align: left;
  padding: 0.2rem 0 0.2rem 0;
  background-color: yellow;
}

td {
  padding: 0.2rem 0 0.2rem 0;
}

.completed {
  color: green;
}

.failed {
  color: red;
}

.processing {
  color: orange;
}

.status-icon {
  width: 0.8rem;
  height: 0.8rem;
}
</style>
