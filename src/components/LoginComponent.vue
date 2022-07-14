<script>
// import { RouterLink } from "vue-router";
export default {
  name: "LoginComponent",
  components: {
    // RouterLink,
  },
  emits: ["sign-user"],
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
      error: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    createUser: function () {
      if (this.user.username.length > 0 && this.user.password.length > 0) {
        this.$emit("signUser", this.user);
        return this.$router.push("/dashboard");
      } else {
        if (this.user.username.length <= 0) {
          this.error.username = "Username field cannot be empty";
        }
        if (this.user.password.length <= 0) {
          this.error.password = "Password field cannot be empty ";
        }
      }
    },
  },
};
</script>

<template>
  <div class="form-container">
    <form class="login-form" @submit.prevent="createUser()">
      <h1 class="form-title">Login Form</h1>
      <div class="flex-row">
        <label class="form-label" for="username">
          <svg x="0px" y="0px" width="12px" height="13px">
            <path
              fill="black"
              d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"
            />
          </svg>
        </label>
        <input
          v-model="user.username"
          class="form-input"
          placeholder="Username"
          type="text"
        />
      </div>
      <div v-if="error.username" class="error-message">
        {{ error.username }}
      </div>
      <div class="flex-row">
        <label class="form-label" for="password">
          <svg x="0px" y="0px" width="15px" height="5px">
            <g>
              <path
                fill="black"
                d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"
              />
            </g>
          </svg>
        </label>
        <input
          v-model="user.password"
          class="form-input"
          placeholder="Password"
          type="password"
        />
      </div>
      <div v-if="error.password" class="error-message">
        {{ error.password }}
      </div>
      <input class="form-submit" type="submit" value="LOGIN" />
    </form>
    <a class="form-forgot" href="#">Forgot password?</a>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .login-form {
    width: 50%;
  }
  .form-container {
    align-items: center;
    justify-content: center;
  }

  .form-input:focus {
    transform: scale(1.1);
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.form-title {
  font-size: var(-h1-font-size);
  padding: 0.5rem 0 0.7rem 0;
}

.flex-row {
  display: flex;
  margin-bottom: var(--mb-1);
}

.form-label {
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.form-input {
  flex: 1;
  padding: 1rem;
  border: 0;
  font-size: var(--normal-font-size);
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.15);
}

.form-input:focus {
  outline: none;
  transition: transform 0.15s ease;
  transform: scale(1.1);
}

.form-submit {
  display: block;
  padding: 0.8rem;
  width: 100%;
  border: 0;
  cursor: pointer;
  font-size: var(--normal-font-size);
  font-weight: var(--font-semi-bold);
  text-shadow: 0 1px 0 rgba(black, 0.2);
}
.form-submit:focus {
  outline: none;
  transition: transform 0.15s ease;
  transform: scale(1.1);
}

.form-forgot {
  margin-top: 1rem;
  font-size: var(--smaller-font-size);
  text-align: center;
  position: relative;
  text-decoration: none;
  cursor: pointer;
}

.form-forgot:hover {
  color: var(--text-color-light);
}

.form-forgot:focus {
  color: var(--text-color-light);
}

.error-message {
  color: red;
  font-size: var(--smaller-font-size);
  margin: 0.5rem;
  padding-left: 2rem;
}
</style>
