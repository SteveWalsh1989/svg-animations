<script setup>
/*
 *Circle loading animation
 
 */
</script>

<template>
  <div class="flex flex-col rounded-full">
    <svg class="svg-body" viewBox="25 25 50 50">
      <circle class="svg-path" cx="50" cy="50" r="20" fill="˙none"></circle>
    </svg>
    Loading
  </div>
</template>

<style scoped>
.svg-body {
  animation: rotate 2s linear infinite;
}
.svg-path {
  fill: none;
  stroke: #878a8a;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 10, 10;
  animation: animate-stroke 1.5s ease-in-out infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-stroke {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke: #266be1;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
    stroke: #70e5f5;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
    stroke: #0000ff;
  }
}
</style>
