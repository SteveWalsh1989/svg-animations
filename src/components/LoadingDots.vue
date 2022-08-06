<script setup>
/*
 * Selection of loading animations
 */

import LoadingDotsPulse from './Loading/LoadingDotsPulse.vue';
import OrbitalDots from './Loading/OrbitalDots.vue';
import LoadingDotsWave from './Loading/LoadingDotsWave.vue';

const SVG_LIST = [OrbitalDots, LoadingDotsPulse, LoadingDotsWave];
</script>

<template>
  <div class="flex">
    <div class="mx-6" v-for="item in SVG_LIST" :key="item">
      <component :is="item" />
    </div>
  </div>
</template>
