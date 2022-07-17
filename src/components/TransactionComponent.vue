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
          <th class="commission">Commission</th>
          <th class="status">Status</th>
        </tr>
        <tr v-for="userOrder in userOrders">
          <td>{{ userOrder.description }}</td>
          <td class="time">{{ userOrder.created_at }}</td>
          <td>
            <span>{{ userOrder.currency_code }}</span
            >{{ userOrder.amount }}
          </td>
          <td class="commission">
            <span>{{ userOrder.currency_code }}</span
            >{{ userOrder.commission }}
          </td>
          <td class="status">
            <svg
              class="status-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              v-if="userOrder.status == 'completed'"
            >
              <path
                fill="#00FF00"
                d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"
              />
            </svg>
            <svg
              class="status-icon"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              v-if="userOrder.status == 'processing'"
            >
              <path
                fill="#FFBF00"
                d="M6.8042,15A.99956.99956,0,0,0,5.438,14.63379l-1.73242,1a1.00016,1.00016,0,0,0,1,1.73242l1.73242-1A1.00073,1.00073,0,0,0,6.8042,15ZM3.70557,8.36621l1.73242,1a1.00016,1.00016,0,1,0,1-1.73242l-1.73242-1a1.00016,1.00016,0,0,0-1,1.73242ZM6,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H5A1,1,0,0,0,6,12ZM17.1958,9a1.0006,1.0006,0,0,0,1.36621.36621l1.73242-1a1.00016,1.00016,0,1,0-1-1.73242l-1.73242,1A1.00073,1.00073,0,0,0,17.1958,9ZM15,6.8042A1.0006,1.0006,0,0,0,16.36621,6.438l1-1.73242a1.00016,1.00016,0,1,0-1.73242-1l-1,1.73242A1.00073,1.00073,0,0,0,15,6.8042Zm5.29443,8.82959-1.73242-1a1.00016,1.00016,0,1,0-1,1.73242l1.73242,1a1.00016,1.00016,0,0,0,1-1.73242ZM16.36621,17.562a1.00016,1.00016,0,1,0-1.73242,1l1,1.73242a1.00016,1.00016,0,1,0,1.73242-1ZM21,11H19a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-9,7a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Zm-3-.8042a.99954.99954,0,0,0-1.36621.36621l-1,1.73242a1.00016,1.00016,0,0,0,1.73242,1l1-1.73242A1.00073,1.00073,0,0,0,9,17.1958ZM12,2a1,1,0,0,0-1,1V5a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2Z"
              />
            </svg>
            <svg
              class="status-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              v-if="userOrder.status == 'failed'"
            >
              <path
                fill="#FF0000"
                d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              />
            </svg>
            <p :class="userOrder.status">{{ userOrder.status }}</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 490px) {
  .table td {
    padding: 0.3rem;
  }
  .time,
  .commission {
    display: none;
  }
}
.transaction-container {
  width: 100%;
  margin: 1rem 0 3rem 0;
  
 
}
.table {
  table-layout:fixed;
    width:100%;
    word-wrap:break-word
}
.table-title {
  font-weight: var(--font-semi-bold);
  font-size: var(--h3-font-size);
  margin: var(--mb-0-5) 0 var(--mb-0-5) 0;
}

.table-row-header th {
  text-align: left;
  padding: 0.2rem 0 0.2rem 0;
}

.table td {
  padding: 0.8rem 0 0.8rem 0;
  border-top: 1px solid;
  border-color: var(--background-header-bg);
}

.completed {
  color: green;
  padding:  2rem 0 2rem 0;
}

.failed {
  color: red;
  padding:  2rem 0 2rem 0;
}

.processing {
  color: orange;
  padding: 2rem 0 2rem 0;
}

.status-icon {
  width: 0.8rem;
  height: 0.8rem;
}
.status {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
}
</style>