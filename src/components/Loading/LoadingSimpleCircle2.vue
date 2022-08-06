<script setup>
/*
 * Simple Circle loading animation
 
 */
</script>

<template>
  <div class="flex flex-col rounded-full">
    Loading
    <svg class="circular-loader" viewBox="25 25 50 50">
      <circle class="loader-path" cx="50" cy="50" r="20" fill="˙none"></circle>
    </svg>
  </div>
</template>

<style scoped>
.loader-path {
  fill: none;
  stroke: #878a8a;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 10, 10;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.circular-loader {
  animation: rotate 2s linear infinite;
}
</style>
