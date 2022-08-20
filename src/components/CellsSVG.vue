<script setup>
/*
 * Sample for some cells
 * dispalys a split for comparing values visually
 */

import { computed, ref } from 'vue';

const value1 = ref(340);
const value2 = ref(150);

const gap = 3;

const total = computed(() => value1.value + value2.value);

const value1Percent = Math.round((value1.value / total.value) * 100);
const value2Percent = Math.round((value2.value / total.value) * 100);

console.log(`Value1 - X1: ${0 + gap} | X2:${value1Percent * 2 - gap}  `);
console.log(
  `Value2 - X1: ${200 - gap} | X2:${200 - value2Percent * 2 - gap}  `,
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
    <svg height="6px" style="width: 100%">
      <line
        x1="95%"
        y1="3"
        :x2="`${value1Percent - gap}%`"
        y2="3"
        style="stroke: #bbdefb"
        stroke-linecap="round"
        stroke-width="5"
      />
      <line
        x1="5%"
        y1="3"
        :x2="`${value1Percent - gap * 2}%`"
        y2="3"
        style="stroke: #42a5f5; stroke-width: 5"
        stroke-linecap="round"
      />
    </svg>
    <div class="flex mt-2">
      <span class="ml-4 mr-auto">{{ value1Percent }}% </span>
      <span class="mr-4 ml-auto">{{ value2Percent }}%</span>
    </div>
  </div>
</template>

<style scoped></style>
