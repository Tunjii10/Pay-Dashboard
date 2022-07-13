<script>
export default {
  name: "AccountDetailCommponent",
};
</script>

<template>
  <div class="account-container">
    <div class="account-title">
      <h2>Hello, Favour</h2>
    </div>
    <div class="account-menu">
      <div class="search-form">
        <form class="search-form-flex" action="">
          <svg
            class="account-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill=""
              d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
            />
          </svg>
          <input
            id="username"
            class="form-input"
            placeholder="Search"
            type="text"
          />
        </form>
      </div>
      <div class="search-icon">
        <svg
          class="account-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill=""
            d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
          />
        </svg>
      </div>
      <div>
        <svg
          class="account-icon"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path
            fill=""
            d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"
          />
        </svg>
      </div>
      <div>
        <img
          class="account-img"
          src="../assets/images/person.jpg"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 491px) {
  .search-icon {
    display: none;
  }
  .search-form-flex {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .search-form .account-icon {
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    z-index: var(--z-fixed);
    width: 1rem;
    height: 1rem;
  }
  .form-input {
    position: relative;
    padding: 0.4rem 0.4rem 0.4rem 2rem;
    background-color: var(--background-header-bg);
    border: none;
  }

  .form-input:focus {
    outline-color: black;
  }
}
@media screen and (max-width: 490px) {
  .search-form {
    display: none;
  }
}
.account-title {
  font: var(--normal-font-size);
}
.account-container {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
}

.account-img {
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
}

.account-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.account-icon:hover {
  color: var(--background-header-bg);
  fill: var(--background-header-bg);
}
.account-menu {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
</style>
