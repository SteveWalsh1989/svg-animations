<script setup>
/*
 * Selection of Donut SVG animations
 
 */

import DonutHalf from './Donuts/DonutHalf.vue';

const SVG_LIST = [DonutHalf];
</script>

<template>
  <div class="flex">
    <div class="mx-6" v-for="item in SVG_LIST" :key="item">
      <component :is="item" />
    </div>
  </div>
</template>
