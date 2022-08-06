<script setup>
/*
 * Platonic shapes using SVG 
 
 */
</script>

<template>
  <div class="flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="450px"
      height="100px"
      viewBox="0 0 450 100"
    >
      <rect x="10" y="5" fill="white" stroke="black" width="90" height="90" />
      <circle fill="white" stroke="black" cx="170" cy="50" r="45" />
      <polygon
        fill="white"
        stroke="black"
        points="279,5 294,35 328,40 303,62 309,94
279,79 248,94 254,62 230,39 263,35 "
      />
      <line fill="none" stroke="black" x1="410" y1="95" x2="440" y2="6" />
      <line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95" />
    </svg>
  </div>
</template>

<style scoped></style>
