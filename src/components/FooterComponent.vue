<script>
import { RouterLink } from "vue-router";
export default {
  name: "HeaderComponent",
  components: {
    RouterLink,
  },
};
</script>

<template>
  <footer>
    <!-- ===================footer=========================-->
    <div class="footer-container">
      <div class="footer-main">
        <!-- footer title -->
        <div class="footer-title">
          <h3>Dashboard</h3>
        </div>
        <!-- footer  menu -->
        <div class="footer-menu">
          <!-- footer item || sign in-->
          <div class="footer-item">
            <svg
              class="footer-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z"
              />
            </svg>
            <p>SignUp</p>
          </div>
          <!-- footer item ||sign up -->
          <div class="footer-item">
            <svg
              class="footer-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
              />
            </svg>
            <p>SignIn</p>
          </div>
        </div>
      </div>
      <!-- footer small text -->
      <div class="footer-small-text">
        <p class="footer-copy">&#169; Dashboard.Inc. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
}
.footer-icon {
  width: 1rem;
  height: 1rem;
}
.footer-container {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.footer-main {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
}
.footer-menu {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.footer-item {
  display: inline-flex;
  gap: 0.1rem;
  align-items: center;
}

.footer-menu .footer-item:hover {
  color: var(--text-color-light);
  fill: var(--text-color-light);
  cursor: pointer;
}

.footer-copy {
  font-size: var(--smaller-font-size);
}
</style>
