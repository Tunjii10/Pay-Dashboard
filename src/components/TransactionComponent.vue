<script>
// import { RouterLink } from "vue-router";
export default {
  name: "TransactionComponent",
  components: {
    // RouterLink,
  },
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
          <th>Payment Description</th>
          <th class="time">Date & Time</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr class="table-row">
          <td>To Daniel School Fees</td>
          <td class="time">16th January, 2021</td>
          <td><span>&#8358;</span>4000</td>
          <td class="status">Completed</td>
        </tr>
         <tr class="table-row">
          <td>Rent Money</td>
          <td class="time">16th January, 2021</td>
          <td><span>&#8358;</span>50,000</td>
          <td>Failed</td>
        </tr>
        <tr class="table-row">
          <td>To Daniel School Fees</td>
          <td class="time">16th January, 2021</td>
          <td><span>&#8358;</span>4000</td>
          <td>Processing</td>
        </tr>
         <tr class="table-row">
          <td>To Daniel School Fees</td>
          <td class="time">16th January, 2021</td>
          <td><span>&#8358;</span>4000</td>
          <td>Completed</td>
        </tr>
         <tr class="table-row">
          <td>To Daniel School Fees</td>
          <td class="time">16th January, 2021</td>
          <td><span>&#8358;</span>4000</td>
          <td>Completed</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 490px) {
  .table .time {
    display: none;
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
.table-row-header {
  background-color: #dcdcdc;
}

.table-row-header th {
  text-align: left;
  padding: 0.2rem 0 0.2rem 0;
}

td {
  padding: 0.2rem 0 0.2rem 0;
}

.status{
    color: green;
}
</style>
