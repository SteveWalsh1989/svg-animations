<script setup>
/*
 * Animation of a growing box using css
 * could be something popping up with info on website as yoiu scroll or click to expand
 */
</script>

<template>
  <div class="box flex mx-auto"></div>
</template>

<style scoped>
.box {
  border-radius: 20px;
  width: 60px;
  height: 60px;
  background: #9fa8da;
  box-shadow: 0 0 0 #9fa6cf, 0 0 0 #9fa8da, 10px 10px 10px #9fa8da inset,
    -10px -10px 10px #9fa8da inset;
  animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s;
  /* animation-fill-mode: forwards; */
}

@keyframes anime {
  0% {
    width: 60px;
    height: 60px;
    background: #9fa8da;
    box-shadow: 0 0 0 #9fa8da, 0 0 0 #9fa8da, 10px 10px 10px #9fa8da inset,
      -10px -10px 10px #9fa8da inset;
  }
  25% {
    width: 60px;
    height: 60px;
    background: #9fa8da;
    box-shadow: 10px 10px 10px #cccccc, 10px 10px 10px #ffffff,
      0 0 0 #cccccc inset, 0 0 0 #ffffff inset;
  }
  50% {
    width: 60px;
    height: 240px;
    background: #9fa8da;
    box-shadow: 10px 10px 10px #cccccc, 10px 10px 10px #ffffff,
      0 0 0 #cccccc inset, 0 0 0 #ffffff inset;
  }
  100% {
    width: 480px;
    height: 240px;
    background: #9fa8da;
    box-shadow: 40px 40px 40px #cccccc, 0 0 0 #ffffff, 0 0 0 #cccccc inset,
      2px 2px 2px #ffffff inset;
  }
}
</style>
