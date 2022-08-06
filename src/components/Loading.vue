<script setup>
/*
 * Selection of loading animations
 */

import LoadingDotsInfinite from './Loading/LoadingDotsInfinite.vue';

const SVG_LIST = [
  { component: LoadingDotsInfinite },
  //   { component: LoadingDotsInfinite },
];
</script>

<template>
  <div>
    <div class="flex" v-for="item in SVG_LIST" :key="item">
      <component :is="item.component" />
    </div>
  </div>
</template>
