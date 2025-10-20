<template>
  <div class="carousel relative">
    <div class="carousel-item" v-for="(item, index) in items" :key="index" v-show="index === current">
      <slot :item="item"></slot>
    </div>
    <div class="flex justify-between mt-2" v-if="items.length > 1">
      <button @click="prev" aria-label="Anterior" class="text-primary hover:text-primary-dark">◀</button>
      <button @click="next" aria-label="Siguiente" class="text-primary hover:text-primary-dark">▶</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const current = ref(0)
function prev() {
  current.value = (current.value + props.items.length - 1) % props.items.length
}
function next() {
  current.value = (current.value + 1) % props.items.length
}
</script>

<style scoped>
.text-primary {
  color: #0A3C6E;
}
.text-primary-dark {
  color: #082b4f;
}
</style>