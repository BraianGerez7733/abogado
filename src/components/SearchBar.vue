<template>
  <div class="search-bar w-full mb-6">
    <label for="busqueda" class="sr-only">Buscar servicios</label>
    <input
      id="busqueda"
      type="search"
      v-model="query"
      @input="emitSearch"
      class="w-full border rounded px-4 py-2"
      placeholder="Buscar servicios..."
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['search'])
const query = ref('')

function emitSearch() {
  emit('search', query.value)
}
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>