<script setup>
/*
 * Sample for some cells
 * dispalys a split for comparing values visually
 */

import { computed, onMounted, onUpdated, ref } from 'vue';

const lineHeight = 6;
const value1 = ref(340);
const value2 = ref(150);
const svg = ref('#svg');
const line1x1 = ref(0);
const line1x2 = ref(0);
const line2x1 = ref(0);
const line2x2 = ref(0);

const gap = value1.value === 0 || value2.value === 0 ? 0 : 4;

// Percentage calculations
const total = computed(() => value1.value + value2.value);
const value1Percent = computed(() =>
  Math.round((value1.value / total.value) * 100),
);
const value2Percent = computed(() =>
  Math.round((value2.value / total.value) * 100),
);

// calculate new xy coordinate for svg lines
function updatelines() {
  const svgWidth = svg.value.clientWidth;
  line1x1.value = gap;
  line1x2.value = svgWidth * (value1Percent.value / 100) - gap;
  line2x1.value = svgWidth * (value1Percent.value / 100) + gap;
  line2x2.value = svgWidth - gap;
}

onMounted(() => {
  updatelines();
});

onUpdated(() => {
  updatelines();
});
</script>

<template>
  <div class="w-52 box flex flex-col mx-auto" ref="svg">
    <div class="flex flex-col mb-12">
      <div class="flex mb-8 ml-4">
        <label for="value1" class="mr-4">left value:</label>
        <input
          type="number"
          v-model.number="value1"
          max="999"
          min="0"
          class="w-16 bg-primary-white border-b-2 pl-2"
        />
      </div>
      <div class="flex mb-4 ml-4">
        <label for="value2" class="mr-2">right value:</label>
        <input
          type="number"
          v-model.number="value2"
          max="999"
          min="0"
          class="w-16 bg-primary-white border-b-2 pl-2"
        />
      </div>
    </div>
    <svg :height="`${lineHeight * 2}px`">
      <line
        v-if="value1"
        :x1="line1x1"
        :y1="lineHeight / 2"
        :x2="line1x2"
        :y2="lineHeight / 2"
        style="stroke: #26a69a; stroke-width: 5"
        stroke-linecap="round"
      />
      <line
        v-if="value2"
        :x1="line2x1"
        :y1="lineHeight / 2"
        :x2="line2x2"
        :y2="lineHeight / 2"
        style="stroke: #b2dfdb"
        stroke-linecap="round"
        stroke-width="5"
      />
    </svg>
    <div class="flex mt-2">
      <span class="ml-4 mr-auto">{{ value1Percent }}% </span>
      <span class="mr-4 ml-auto">{{ value2Percent }}%</span>
    </div>
  </div>
</template>

<style scoped></style>
