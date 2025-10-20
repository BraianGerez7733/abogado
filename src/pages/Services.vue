<template>
  <main class="container mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-6 text-primary text-center">Áreas de práctica</h1>
    <SearchBar @search="onSearch" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard
        v-for="service in filteredServices"
        :key="service.id"
        :service="service"
      />
    </div>
    <p v-if="filteredServices.length === 0" class="mt-6 text-center text-gray-600">No se encontraron servicios.</p>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import ServiceCard from '@/components/ServiceCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useServicesStore } from '@/store/services'

const servicesStore = useServicesStore()
const query = ref('')
const services = ref(servicesStore.services)

onMounted(async () => {
  if (!servicesStore.loaded) {
    await servicesStore.fetchServices()
  }
  services.value = servicesStore.services
})

function onSearch(q: string) {
  query.value = q.toLowerCase()
}

const filteredServices = computed(() => {
  if (!query.value) return services.value
  return services.value.filter(
    s =>
      s.nombre.toLowerCase().includes(query.value) ||
      s.descripcion.toLowerCase().includes(query.value)
  )
})
</script>

<style scoped>
.text-primary {
  color: #0A3C6E;
}
</style>