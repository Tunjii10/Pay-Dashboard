<script>
// import { RouterLink } from "vue-router";
export default {
  name: "OverviewComponent",
  components: {
    // RouterLink,
  },
  props: ["userName"],
};
</script>

<template>
  <div class="overview-container">
    <div>
      <h3 class="overview-title">Overview</h3>
    </div>
    <div class="overview-details">
      <div>
        <p class="label">Name</p>
        <p>{{ this.userName }}</p>
      </div>
      <div>
        <p class="label">Balance</p>
        <p class="overview-amount"><span>&#8358;</span>4,000,000</p>
      </div>
    </div>
    <div class="overview-buttons">
      <div class="button deposit">
        <svg
          class="button-icon"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M335.367,257.951c-7.187,0-13.033,5.847-13.033,13.034v43.562c0,7.187,5.847,13.033,13.033,13.033H512v-69.628H335.367z
			 M357.347,312.858c-11.097,0-20.094-8.996-20.094-20.094c0-11.097,8.996-20.094,20.094-20.094s20.094,8.996,20.094,20.094
			C377.44,303.862,368.444,312.858,357.347,312.858z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M335.367,227.534H512V152.95c0-23.959-19.492-43.45-43.45-43.45h-6.084H133.703H43.45C19.492,109.5,0,128.991,0,152.95
			v310.047c0,23.959,19.492,43.451,43.45,43.451h425.099c23.959,0,43.45-19.492,43.45-43.451v-105H335.367
			c-23.959,0-43.45-19.491-43.45-43.45v-43.562C291.917,247.026,311.41,227.534,335.367,227.534z"
              />
            </g>
          </g>
          <g>
            <g>
              <polygon points="425.425,5.552 219.067,79.082 451.626,79.082 		" />
            </g>
          </g>
        </svg>

        <p>Deposit</p>
      </div>
      <div class="button withdraw">
        <svg
          class="button-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill=""
            d="M22,2H2A1,1,0,0,0,1,3v8a1,1,0,0,0,1,1H5v9a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V12h3a1,1,0,0,0,1-1V3A1,1,0,0,0,22,2ZM7,20V18a2,2,0,0,1,2,2Zm10,0H15a2,2,0,0,1,2-2Zm0-4a4,4,0,0,0-4,4H11a4,4,0,0,0-4-4V8H17Zm4-6H19V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v3H3V4H21Zm-9,5a3,3,0,1,0-3-3A3,3,0,0,0,12,15Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,12,11Z"
          />
        </svg>
        <p>Withdraw</p>
      </div>
      <div class="button transfer">
        <svg
          class="button-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill=""
            d="M21.71,9.29l-4-4a1,1,0,0,0-1.42,1.42L18.59,9H7a1,1,0,0,0,0,2H21a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,9.29ZM17,13H3a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,15H17a1,1,0,0,0,0-2Z"
          />
        </svg>
        <p>Transfer</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overview-container {
  margin: var(--mb-0-75) 0 0 0;
  background-color: #dcdcdc;
  border-radius: 10px;
  padding: 0.8rem;
}

.overview-title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
}

.overview-details {
  margin: var(--mb-1) 0 var(--mb-1) 0;
  display: flex;
  flex-direction: row;
  gap: 5rem;
}

.overview-details .label {
  font-size: var(--smaller-font-size);
}

.overview-amount {
  font-weight: var(--font-semi-bold);
}

.overview-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.button {
  border-radius: 10px;
  padding: 0.5rem;
  color: var(--container-color);
  font-size: var(--smaller-font-size);
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
}

.button:hover {
  transform: scale(1.1);
  transition: transform 0.15s ease;
}

.button:active {
  background-color: var(--background-header-bg);
}

.button-icon {
  width: 1rem;
  height: 1rem;
}
.deposit {
  background-color: green;
}
.withdraw {
  background-color: red;
}
.transfer {
  background-color: orange;
}
</style>
