<template>
  <article class="service-card bg-white shadow-md rounded-md overflow-hidden transition hover:shadow-xl" aria-label="Detalle de servicio">
    <img
      class="w-full h-48 object-cover"
      :src="service.imagen"
      :alt="`Imagen ilustrativa para ${service.nombre}`"
      loading="lazy"
    />
    <div class="p-4 flex flex-col h-full justify-between">
      <div>
        <h3 class="text-xl font-semibold mb-2 text-primary">{{ service.nombre }}</h3>
        <p class="text-gray-700 mb-4 line-clamp-3">
          {{ service.descripcion }}
        </p>
      </div>
      <router-link
        :to="`/servicios/${service.slug}`"
        class="mt-auto inline-block bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded"
      >
        Consultar
      </router-link>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  service: {
    type: Object as () => {
      id: number
      slug: string
      nombre: string
      descripcion: string
      imagen: string
    },
    required: true
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.text-primary {
  color: #0A3C6E;
}
</style>