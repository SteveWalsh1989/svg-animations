<script setup>
/*
 * Orbital dots animation
 
 */
</script>

<template>
  <div class="flex flex-col w-full h-full p-8">
    <div class="w-4 h-4 rounded-full center">
      <div class="w-4 h-4 rounded-full orbiter"></div>
    </div>
  </div>
</template>

<style scoped>
.center {
  background-color: #38aff9;
  position: relative;
  animation: alterScale 2s infinite;
}
.orbiter {
  position: absolute;
  animation: orbit 3s infinite linear;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: 8px;
  top: 5px;
}

.orbiter::before {
  content: '';
  width: 20px;
  height: 20px;
  background-color: #a5a7a6;
  position: absolute;
  left: -40px;
  top: -30px;
  border-radius: 50%;
  margin: 51px;
}

@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes alterScale {
  0%,
  100% {
    transform: scale(0.8);
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
</style>
