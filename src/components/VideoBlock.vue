<template>
  <section class="video-block py-12 bg-gray-100">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-6 text-primary">¿Cómo actuar tras un accidente laboral?</h2>
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          :src="computedUrl"
          title="Video explicativo"
          frameborder="0"
          allowfullscreen
          loading="lazy"
          class="w-full h-full"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    default: '' // Provide your YouTube video ID here
  }
})

const computedUrl = computed(() => {
  return props.videoId
    ? `https://www.youtube.com/embed/${props.videoId}?rel=0&modestbranding=1&showinfo=0`
    : ''
})
</script>

<style scoped>
.text-primary {
  color: #0A3C6E;
}
.aspect-w-16 {
  position: relative;
  width: 100%;
}
.aspect-w-16.aspect-h-9::before {
  content: '';
  display: block;
  padding-top: 56.25%;
}
.aspect-w-16.aspect-h-9 > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>