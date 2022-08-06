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
      <h2 class="text-2xl">{{ title }}</h2>
      <p class="text-sm">{{ description }}</p>
    </div>
    <div class="border border-solid border-black rounded-xl p-16">
      <slot name="svg-animation" />
    </div>
  </div>
</template>

<style scoped></style>
