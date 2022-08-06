<script setup>
/*
 * Simple Circle loading animation
 
 */
</script>

<template>
  <div class="flex flex-col rounded-full animation"></div>
</template>

<style scoped>
.animation {
  background-color: #ffffff;
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;

  margin: auto;
  border: 8px solid transparent;
  border-top-color: #878a8a;
  border-radius: 50%;
  animation: loading-spinner 1s ease infinite;
}

.animation::after {
  animation: loading-spinner 1s ease infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
}

@keyframes loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
