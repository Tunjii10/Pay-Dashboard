<script>
export default {
  name: "LoadingComponent",
};
</script>
<template>
  <div class="loading-container">
    <div class="loading-flex">
      <img src="../assets/gif/Loading_icon.gif" />
    </div>
  </div>
</template>
<style scoped>
.loading-container {
  width: 100%;
}
.loading-flex {
  display: flex;
  justify-content: center;
}
</style>
