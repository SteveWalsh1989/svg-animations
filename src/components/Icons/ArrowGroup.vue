<script setup>
/*
 * Arrow group svg
 * Changes on hover
 */

import { onMounted, ref } from 'vue';

const arrowGroup = ref('#arrowGroup');
const colors = [
  '#EF9A9A',
  '#F48FB1',
  '#CE93D8',
  '#B39DDB',
  '#9FA8DA',
  '#90CAF9',
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor() {
  arrowGroup.value.style.cssText = `--primary-color: ${getRandomColor()}; --secondary-color: ${getRandomColor()};`;
}

onMounted(() => {
  console.log('🍕 > onMounted > triangles', arrowGroup);
});
</script>

<template>
  <div class="arrowGroup" ref="arrowGroup">
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="changeColor"
    >
      <g id="triangles" ref="triangles">
        <g id="lightGroup">
          <path
            id="triangleLight1"
            opacity="0.6"
            d="M53.4872 46.3509C55.7436 47.6536 55.7436 50.9105 53.4872 52.2132L13.718 75.174C11.4615 76.4767 8.64104 74.8483 8.64104 72.2428L8.64104 26.3213C8.64104 23.7158 11.4616 22.0874 13.718 23.3901L53.4872 46.3509Z"
          />
        </g>
        <g id="darkGroup">
          <path
            id="triangleDark1"
            opacity="0.8"
            d="M74.9231 46.915C77.1795 48.2177 77.1795 51.4746 74.9231 52.7773L34.3077 76.2266C32.0513 77.5294 29.2308 75.9009 29.2308 73.2955L29.2308 26.3968C29.2308 23.7914 32.0513 22.1629 34.3077 23.4657L74.9231 46.915Z"
          />
          <path
            id="triangleDark2"
            opacity="0.8"
            d="M54.6154 46.915C56.8718 48.2177 56.8718 51.4746 54.6154 52.7773L14 76.2266C11.7436 77.5294 8.92307 75.9009 8.92307 73.2955L8.92308 26.3968C8.92308 23.7914 11.7436 22.1629 14 23.4657L54.6154 46.915Z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.arrowGroup {
  cursor: pointer;
  --primary-color: #fa6d6d;
  --secondary-color: #faa658;

  #triangleDark1,
  #triangleDark2 {
    fill: var(--primary-color);
  }

  #triangleLight1 {
    fill: var(--secondary-color);
  }

  #triangleDark1,
  #triangleDark2,
  #triangleLight1 {
    transition: all 1s ease;
  }

  #triangleDark2 {
    transform: translateX(-100%);
  }
  svg:hover #triangleLight1 {
    transform: translateX(20%);
  }
  svg:hover #triangleDark1 {
    transform: translateX(40%);
    opacity: 0;
  }
  svg:hover #triangleDark2 {
    transform: translateX(0%);
  }
}
</style>
