<script setup>
import { ref, computed } from 'vue';

const progress = ref(0.4); // Set progress to 40%
const circumference = computed(() => 2 * Math.PI * 30);
const dashArray = computed(
  () => `${circumference.value} ${circumference.value}`,
);
const dashOffset = computed(
  () => `calc(${circumference.value} * (1 - ${progress.value}))`,
);
</script>
<template>
  <svg viewBox="0 0 100 100">
    <circle
      class="gray-circle"
      cx="50"
      cy="50"
      r="30"
      stroke="#ddd"
      stroke-width="10"
      fill="none"
    />
    <circle
      class="blue-circle"
      cx="50"
      cy="50"
      r="30"
      stroke="#007aff"
      stroke-width="10"
      fill="none"
      :stroke-dasharray="dashArray"
      :stroke-dashoffset="dashOffset"
    />
  </svg>
</template>

<style scoped>
.gray-circle {
  z-index: 0;
}
.blue-circle {
  z-index: 1;
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-linecap: round;
  --circumference: ${circumference.value};
  --dash-offset: ${dashOffset.value};
}
</style>
