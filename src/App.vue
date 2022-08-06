<script setup>
import Header from './components/Header.vue';
import SVGCard from './components/SVGCard.vue';
import WordSVG from './components/WordSVG.vue';
import WordSVG2 from './components/WordSVG2.vue';
import WordSVG3 from './components/WordSVG3.vue';

const SVG_LIST = [
  {
    title: 'Logo appearing SVG 1',
    description:
      "A simple SVG animation that animates a word. Each letter is a separate path with a delay to start the animation and a final fill animation is used after the final letter's animation has finished .",
    component: WordSVG,
  },
  {
    title: 'Logo appearing SVG 2',
    description:
      "A simple SVG animation that animates a word. Each letter is a separate path with a delay to start the animation and fill animation is used after the each individual letter's animation has finished.",
    component: WordSVG2,
  },
  {
    title: 'Handwritting SVG',
    description:
      'A simple SVG animation that animates a word as if it is hand drawn.',
    component: WordSVG3,
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
      class="my-8"
    >
      <template #svg-animation>
        <component :is="items.component" />
      </template>
    </SVGCard>
  </div>
</template>
