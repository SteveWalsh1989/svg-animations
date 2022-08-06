<script setup>
import Header from './components/Header.vue';
import SVGCard from './components/SVGCard.vue';
import { SVG_LIST } from './utils/constants.js';
</script>

<template>
  <div class="w-screen flex flex-col">
    <Header />
    <SVGCard
      v-for="item in SVG_LIST"
      :key="item.title"
      :title="item.title"
      :description="item.description"
      class="mt-40"
    >
      <template #svg-animation>
        <component :is="item.component" />
      </template>
    </SVGCard>
  </div>
</template>
