<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SVGCard from './components/SVGCard.vue';
import { SVG_LIST } from './utils/constants.js';
</script>

<template>
  <div class="w-full flex flex-col justify-center">
    <Header />
    <SVGCard
      v-for="item in SVG_LIST"
      :key="item.title"
      :title="item.title"
      :description="item.description"
      class="mt-20 mx-10 md:mx-32 lg:mx-96"
    >
      <template #svg-animation>
        <component :is="item.component" />
      </template>
    </SVGCard>
    <Footer />
  </div>
</template>
