<script>
import { PayService } from "../services/payService.js";
export default {
  name: "HeaderComponent",
  methods: {
    signOutUserButton: async function () {
      try {
        if (localStorage.getItem("USER-CRED") !== null) {
          let user_cred = JSON.parse(localStorage.getItem("USER-CRED"));
          const formData = new FormData();
          formData.append("id", user_cred.userId);
          let response = await PayService.logout(formData);
          if (response.data.status !== 200) {
            return console.log({ error: response.data.message });
          } else {
            this.$emit("logOut");
            localStorage.removeItem("USER-CRED");
            return this.$router.push("/");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <!--========Header===========-->
  <header class="header">
    <!-- nav-bar -->
    <nav class="nav-bar">
      <!-- ===================default navbar || when user not logged in shows=========================-->
      <div class="nav-menu-default" v-if="$route.name == 'login'">
        <!-- default nav title -->
        <div class="nav-title">
          <h3>Dashboard</h3>
        </div>
        <!-- default nav menu -->
        <div class="nav-menu">
          <!-- nav item || signup -->
          <div class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z"
              />
            </svg>
            <p><a href="#login">SignUp</a></p>
          </div>
          <!-- nav-item ||Signout -->
          <div class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
              />
            </svg>
            <p><a href="#login">SignIn</a></p>
          </div>
        </div>
      </div>
      <!-- =====================navbar bigscreen===================== -->
      <div class="nav-menu-big-screen" v-if="$route.name == 'dashboard'">
        <!-- big screen nav title -->
        <div class="nav-title">
          <h3>Dashboard</h3>
        </div>
        <!-- big screen nav menu -->
        <div class="nav-menu">
          <!-- big screen nav item || My account -->
          <div class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
              />
            </svg>
            <p>My Account</p>
          </div>
          <!-- big screen nav item || Transactions -->
          <div class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
              />
            </svg>
            <p><a href="#transactions">Transactions</a></p>
          </div>
          <!-- big screen nav item || Cards -->
          <div class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M7,15h3a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2ZM19,5H5A3,3,0,0,0,2,8v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,12a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20Zm0-8H4V8A1,1,0,0,1,5,7H19a1,1,0,0,1,1,1Z"
              />
            </svg>
            <p>Cards</p>
          </div>
          <!-- big screen nav item || Investments -->
          <div class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
              />
            </svg>
            <p>Investments</p>
          </div>
          <!-- big screen nav item || Signout -->
          <div class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
              />
            </svg>
            <p @click="signOutUserButton()">SignOut</p>
          </div>
          <!-- big screen nav item || Settings -->
          <div class="nav-item settings">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z"
              />
            </svg>
            <p>Settings</p>
          </div>
        </div>
      </div>
      <!-- =====================navbar smallscreen===================== -->
      <div class="nav-menu-small-screen" v-if="$route.name == 'dashboard'">
        <!-- small screen nav item || home -->
        <div class="nav-item">
          <a href="#">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z"
              />
            </svg>
          </a>
        </div>
        <!-- small screen nav item || transactions -->
        <div class="nav-item">
          <a href="#transactions"
            ><svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path
                fill=""
                d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
              />
            </svg>
          </a>
        </div>
        <!-- small screen nav item || signout -->
        <div class="nav-item" @click="signOutUserButton()">
          <svg
            class="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill=""
              d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* header */
.header {
  width: 100%;
}

/* 490px screen and below */
@media screen and (max-width: 490px) {
  .nav-menu-small-screen {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--container-color);
    padding: 0.5rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    z-index: var(--z-fixed);
    gap: 4rem;
  }
  .nav-menu-big-screen {
    display: none;
  }
}

/* 491px screen and above */
@media screen and (min-width: 491px) {
  .nav-menu-small-screen {
    display: none;
  }
}

/* nav menu big screen */
.nav-menu-big-screen {
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: var(--z-fixed);
  top: 0;
  left: 0;
  background-color: var(--background-header-bg);
  overflow-x: hidden;
  padding: 1rem;
}

/* nav menu default */
.nav-menu-default {
  width: 100%;
  position: fixed;
  z-index: var(--z-fixed);
  top: 0;
  left: 0;
  background-color: var(--container-color);
  padding: 0.8rem 0.7rem 0.5rem 0.7rem;
  box-shadow: 0 -1px 7px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
}

/* nav icon hover small screen */
.nav-menu-small-screen .nav-icon:hover {
  fill: var(--text-color-light);
  cursor: pointer;
}

/* nav item hover */
.nav-item:hover {
  color: var(--text-color-light);
  fill: var(--text-color-light);
  cursor: pointer;
}

/* nav icon small screen */
.nav-icon {
  height: 1.5rem;
  width: 1.5rem;
}

/* nav icon big screen */
.nav-menu .nav-item .nav-icon {
  height: 1rem;
  width: 1rem;
}

/* nav menu */
.nav-menu {
  margin-top: 50%;
}

/* nav menu default placement */
.nav-menu-default .nav-menu {
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

/* nav menu default nav title */
.nav-menu-default .nav-title {
  display: flex;
  align-items: center;
}

/* nav item spacing default */
.nav-menu-default .nav-menu .nav-item {
  gap: 0.1rem;
}

/* nav item */
.nav-menu .nav-item {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 0.5rem;
}

/* settings nav big screen */
.settings {
  display: block;
  width: 80%;
  border-top: 1px solid;
  border-color: var(--text-color-light);
  position: absolute;
  bottom: 0;
  margin: 1rem 0 1rem 0;
}
</style>
