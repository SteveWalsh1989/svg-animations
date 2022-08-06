<script setup>
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
</script>

<template>
  <div class="flex">
    <div class="flex-col mr-12 p-1">
      <h2 class="text-2xl mb-8">{{ title }}</h2>
      <p class="text-sm">{{ description }}</p>
    </div>
    <div
      class="w-1/2 h-96 p-16 flex items-center border border-solid border-black rounded-xl"
    >
      <slot name="svg-animation" />
    </div>
  </div>
</template>

<style scoped></style>
