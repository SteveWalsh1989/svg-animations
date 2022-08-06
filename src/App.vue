<script setup>
import Header from './components/Header.vue';
import WordSVG from './components/WordSVG.vue';
import SVGCard from './components/SVGCard.vue';

const SVG_LIST = [
  {
    title: 'Logo appearing SVG',
    description:
      "A simple SVG animation that animates a word. Each letter is a separate path with a delay to start the animation and a final fill animation is used after the final letter's animation has finished .",
    component: WordSVG,
  },
];
</script>

<template>
  <div class="w-screen flex flex-col">
    <Header />
    <SVGCard
      v-for="items in SVG_LIST"
      :key="items.title"
      :title="items.title"
      :description="items.description"
    >
      <template #svg-animation>
        <component :is="items.component" />
      </template>
    </SVGCard>
  </div>
</template>
