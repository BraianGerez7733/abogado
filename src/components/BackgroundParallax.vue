<template>
  <section
    class="parallax-section relative h-64 flex items-center justify-center text-white text-center"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10">
      <slot>Contenido parallax</slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: '/assets/hero-bg.png'
  }
})
</script>

<style scoped>
.parallax-section {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>