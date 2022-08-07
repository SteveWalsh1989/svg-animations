<script setup>
/*
 * Selection of icon svgs
 */

import ArrowGroup from './Icons/ArrowGroup.vue';

const SVG_LIST = [ArrowGroup];
</script>

<template>
  <div class="flex">
    <div class="mx-16" v-for="item in SVG_LIST" :key="item">
      <component :is="item" />
    </div>
  </div>
</template>
