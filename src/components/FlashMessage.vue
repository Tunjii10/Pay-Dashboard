<script>
export default {
  data: function () {
    return {
      message: this.loggedOutMessage,
    };
  },
  props: ["loggedOutMessage"],
  methods: {
    clearMessage: function () {
      return (this.message = "");
    },
  },
};
</script>

<template>
  <div class="flash-container" v-if="message">
    <div class="flash-flex">
      <div class="flash-message">{{ message }}</div>
      <div>
        <button class="flash-button" @click.prevent="clearMessage()">
          <svg
            class="flash-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill=""
              d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flash-container {
  margin: auto;
  width: 60%;
  padding: 0.5rem;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.15);
  z-index: var(--z-modal);
}
.flash-flex {
  display: flex;
  justify-content: space-between;
}
.flash-message {
  color: green;
}
.flash-icon {
  width: 1rem;
  height: 1rem;
  background-color: white;
  cursor: pointer;
}

.flash-icon:hover {
  fill: var(--text-color-light);
}

.flash-icon:focus {
  fill: var(--text-color-light);
}
.flash-button {
  border: none;
  background-color: white;
}
</style>
