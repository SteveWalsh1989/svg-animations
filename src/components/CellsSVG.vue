<script setup>
/*
 * Sample for some cells
 * dispalys a split for comparing values visually
 */

import { computed, ref } from 'vue';

// these could be props
const lineHeight = 6;
const value1 = ref(340);
const value2 = ref(150);

// gap and percentage calculations
const gap = value1.value === 0 || value2.value === 0 ? 0 : 3;
const total = computed(() => value1.value + value2.value);
const value1Percent = computed(() =>
  Math.round((value1.value / total.value) * 100),
);
const value2Percent = computed(() =>
  Math.round((value2.value / total.value) * 100),
);
</script>

<template>
  <div class="w-52 box flex flex-col mx-auto">
    <div class="flex flex-col">
      <div class="flex mb-4 ml-4">
        <label for="value1" class="mr-2">Value 1:</label>
        <input
          type="number"
          v-model.number="value1"
          max="999"
          min="0"
          class="w-16 bg-primary-white border-b-2 pl-2"
        />
      </div>
      <div class="flex mb-4 ml-4">
        <label for="value2" class="mr-2">Value 2:</label>
        <input
          type="number"
          v-model.number="value2"
          max="999"
          min="0"
          class="w-16 bg-primary-white border-b-2 pl-2"
        />
      </div>
    </div>
    <svg :height="`${lineHeight}px`" style="width: 100%">
      <line
        v-if="value1"
        :x1="`${gap}%`"
        :y1="lineHeight / 2"
        :x2="`${value1Percent - gap * 2}%`"
        :y2="lineHeight / 2"
        style="stroke: #26a69a; stroke-width: 5"
        stroke-linecap="round"
      />
      <line
        v-if="value2"
        :x1="`${100 - gap}%`"
        :y1="lineHeight / 2"
        :x2="`${value1Percent - gap}%`"
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
