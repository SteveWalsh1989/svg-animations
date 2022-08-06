<script setup>
/*
 * Linear infinite loading dots animation
 */
</script>

<template>
  <div class="flex">
    <div
      v-for="index in 5"
      :key="index"
      class="w-4 h-4 inline-block mr-4 rounded-full animation"
    ></div>
  </div>
</template>

<style scoped>
.animation {
  animation: alterScale 2.5s ease-in-out infinite;
  transform: scale(0);
}

@keyframes alterScale {
  0%,
  100% {
    transform: scale(0.2);
    background-color: #a5a7a6;
  }
  40% {
    transform: scale(1);
    background-color: #5e6060;
  }
  50% {
    transform: scale(1);
    background-color: #5e6060;
  }
}

div:nth-child(0) {
  animation-delay: 0s;
}
div:nth-child(1) {
  animation-delay: 0.2s;
}
div:nth-child(2) {
  animation-delay: 0.4s;
}
div:nth-child(3) {
  animation-delay: 0.6s;
}
div:nth-child(4) {
  animation-delay: 0.8s;
}
div:nth-child(5) {
  animation-delay: 1s;
}
</style>
