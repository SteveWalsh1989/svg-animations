<script setup>
/*
 * Selection of loading animations
 */

import LoadingSimpleCircle from './Loading/LoadingSimpleCircle.vue';
import LoadingSimpleCircle2 from './Loading/LoadingSimpleCircle2.vue';
import LoadingCircle from './Loading/LoadingCircle.vue';

const SVG_LIST = [LoadingSimpleCircle, LoadingSimpleCircle2, LoadingCircle];
</script>

<template>
  <div class="flex">
    <div class="mx-16" v-for="item in SVG_LIST" :key="item">
      <component :is="item" />
    </div>
  </div>
</template>
