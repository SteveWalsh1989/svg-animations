<script setup>
import { nextTick, ref } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const renderSVG = ref(true);

function restartAnimation() {
  renderSVG.value = false;
  nextTick(() => {
    renderSVG.value = true;
  });
}
</script>

<template>
  <div class="flex">
    <div class="flex-col mr-12 p-1 w-1/5 text-left">
      <h2 class="text-2xl mb-8 font-semibold underline">{{ title }}</h2>
      <p class="text-sm">{{ description }}</p>
      <button
        class="bg-primary-blue hover:bg-blue-700 text-primary-white font-bold py-2 px-4 rounded mt-8"
        @click="restartAnimation()"
      >
        Restart
      </button>
    </div>
    <div
      class="w-1/2 h-96 p-16 flex items-center border border-solid border-black rounded-xl"
    >
      <slot v-if="renderSVG" name="svg-animation" />
    </div>
  </div>
</template>

<style scoped></style>
