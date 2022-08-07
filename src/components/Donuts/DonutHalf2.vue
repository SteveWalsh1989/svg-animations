<script setup>
import { computed, ref } from 'vue';
/*
 * A half donut SVG animation

 */
const lineLength = Math.PI * 92;
const leftValueTotal = 45;
const rightValueTotal = 100 - leftValueTotal;

const gapSize = 6;

const leftValuePercentage = ref(Math.max((leftValueTotal / 100) * 100, 2));

const leftLineLength = computed(() => {
  return ~~((leftValuePercentage.value / 100) * lineLength);
});

const rightValuePercentage = computed(() => {
  return 100 - leftValuePercentage.value;
});

const rightLineLength = computed(() => {
  return ~~((rightValuePercentage.value / 100) * lineLength);
});
</script>

<template>
  <div class="h-28 w-40">
    <div class="flex mb-4 ml-4">
      <label for="value">Value:</label>
      <input
        type="number"
        v-model.number="leftValuePercentage"
        max="100"
        min="0"
        class="w-8 bg-primary-white border-b-2"
      />
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
      viewBox="0 0 400 400"
      fill="none"
      class="flex"
    >
      <circle
        v-if="leftValueTotal > 0"
        class="leftValue-line"
        cx="100"
        cy="100"
        r="92"
        fill="transparent"
        stroke-linecap="round"
        :stroke-dasharray="`${Math.max(leftLineLength - gapSize, 0)}px 200%`"
      />

      <circle
        v-if="rightValueTotal > 0"
        class="rightValue-line"
        cx="100"
        cy="100"
        r="92"
        fill="transparent"
        stroke-linecap="round"
        :stroke-dasharray="`${Math.max(rightLineLength - gapSize, 0)}px 200%`"
      />
      <text class="title" x="80" y="130" rx="4" fill="#000">SVG</text>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.leftValue-line,
.rightValue-line {
  stroke-width: 10;
  transform-origin: center;
  transform-box: fill-box;
  stroke-linecap: round;
  transition: 1s stroke-dasharray cubic-bezier(0.45, 0.05, 0.49, 1.04);
}
.leftValue-line {
  stroke: #087613aa;
  transform: rotate(180deg);
  animation: fill 1s ease;
}

.rightValue-line {
  transform: rotate(180deg);
  animation: fill 1s ease;
}

@keyframes fill {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
}
.rightValue-line {
  stroke: #97ee9faa;
  transform: rotate(180deg) scalex(-1);
}
</style>
