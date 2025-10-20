<template>
  <section v-if="service" class="service-detail container mx-auto py-12 px-4">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-1/2">
        <img
          :src="service.imagen"
          :alt="`Imagen del servicio ${service.nombre}`"
          class="w-full h-64 object-cover rounded shadow-md"
          loading="lazy"
        />
      </div>
      <div class="lg:w-1/2">
        <h1 class="text-3xl font-bold mb-4 text-primary">{{ service.titulo || service.nombre }}</h1>
        <p class="mb-6 text-gray-700 whitespace-pre-line">
          {{ service.descripcion }}
        </p>
        <h2 class="text-2xl font-semibold mb-3 text-primary">Beneficios de nuestro servicio</h2>
        <ul class="list-disc pl-6 mb-6 text-gray-700">
          <li v-for="(beneficio, idx) in service.beneficios" :key="idx">{{ beneficio }}</li>
        </ul>
        <router-link
          to="/contacto"
          class="inline-block bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded"
        >
          Solicitar consulta gratuita
        </router-link>
      </div>
    </div>
  </section>
  <section v-else class="container mx-auto py-12 px-4">
    <p>Cargando detalles del servicio...</p>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  service: {
    type: Object as () => {
      id: number
      slug: string
      nombre: string
      titulo: string
      descripcion: string
      beneficios: string[]
      imagen: string
      categoria?: string
    } | null,
    default: null
  }
})
</script>

<style scoped>
.text-primary {
  color: #0A3C6E;
}
</style>