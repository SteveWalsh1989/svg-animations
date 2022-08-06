<script setup>
/*
 * Selection of loading animations
 */

import LoadingSimpleCircle from './Loading/LoadingSimpleCircle.vue';

const SVG_LIST = [LoadingSimpleCircle];
</script>

<template>
  <div class="flex">
    <div class="mx-6" v-for="item in SVG_LIST" :key="item">
      <component :is="item" />
    </div>
  </div>
</template>
