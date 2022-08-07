<script setup>
/*
 * A half donut SVG animation
 
 */
</script>

<template>
  <div class="flex flex-col mt-16">
    <div class="donutHalf" style="--percentage: 40"></div>
    <span class="ml-9">css</span>
  </div>
</template>

<style scoped lang="scss">
.donutHalf {
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  width: 150px;
  height: 50px;
  overflow: hidden;
  box-sizing: border-box;

  --percentage: 0;
  --fill: #000;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border: 10px solid;
    border-radius: 50%;
    border-color: #b8b8b5 #b8b8b5 var(--fill) var(--fill);
    transform: rotate(calc(1deg * (var(--percentage) * 1.8)));
    animation: progressAnimation 1s ease-in;
  }
}

@keyframes progressAnimation {
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(90deg);
  }
}
</style>
