<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="m-auto text-2xl font-sans font-semibold">{{ msg }}</div>
    <div class="m-auto text-gray-500 text-sm">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </div>
  </div>
</template>
