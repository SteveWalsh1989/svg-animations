<script setup>
/*
 * Sample for some cells
 * dispalys a split for comparing values visually
 */

import { computed, onMounted, onUpdated, ref, watch } from 'vue';

const leftValue = ref(340);
const rightValue = ref(150);
const svg = ref('#svg');
const leftLineX1 = ref(0);
const leftLineX2 = ref(0);
const rightLineX1 = ref(0);
const rightLineX2 = ref(0);
const svgWidth = ref(200);
const gap = leftValue.value === 0 || rightValue.value === 0 ? 0 : 4;

// Percentage calculations
const total = computed(() => leftValue.value + rightValue.value);
const leftValuePercent = computed(() =>
  Math.round((leftValue.value / total.value) * 100),
);
const rightValuePercent = computed(() =>
  Math.round((rightValue.value / total.value) * 100),
);

// calculate new xy coordinate for svg lines
function updatelines(newWidth) {
  leftLineX1.value = gap;
  leftLineX2.value = newWidth * (leftValuePercent.value / 100) - gap;
  rightLineX1.value = newWidth * (leftValuePercent.value / 100) + gap;
  rightLineX2.value = newWidth - gap;
}

onMounted(() => {
  updatelines(svg.value.clientWidth);
});

watch(svg.value.clientWidth, (newVal) => {
  updatelines(newVal);
});

// these could be removed if getting value as prop
watch(leftValue, () => {
  updatelines(svgWidth.value);
});
watch(rightValue, () => {
  updatelines(svgWidth.value);
});
</script>

<template>
  <div class="w-52 box flex flex-col mx-auto" ref="svg">
    <div class="flex flex-col mb-12">
      <div class="flex mb-8 ml-4">
        <label for="leftValue" class="mr-4">left value:</label>
        <input
          type="number"
          v-model.number="leftValue"
          max="999"
          min="0"
          class="w-16 bg-primary-white border-b-2 pl-2"
        />
      </div>
      <div class="flex mb-4 ml-4">
        <label for="rightValue" class="mr-2">right value:</label>
        <input
          type="number"
          v-model.number="rightValue"
          max="999"
          min="0"
          class="w-16 bg-primary-white border-b-2 pl-2"
        />
      </div>
    </div>
    <svg height="12">
      <line
        v-if="leftValue"
        :x1="leftLineX1"
        :y1="3"
        :x2="leftLineX2"
        :y2="3"
        stroke="#26a69a"
        stroke-linecap="round"
        stroke-width="6"
      />
      <line
        v-if="rightValue"
        :x1="rightLineX1"
        :y1="3"
        :x2="rightLineX2"
        :y2="3"
        stroke="#b2dfdb"
        stroke-linecap="round"
        stroke-width="6"
      />
    </svg>
    <div class="flex mt-2">
      <span class="ml-4 mr-auto">{{ leftValuePercent }}% </span>
      <span class="mr-4 ml-auto">{{ rightValuePercent }}%</span>
    </div>
  </div>
</template>

<style scoped></style>
