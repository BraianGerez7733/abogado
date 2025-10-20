<template>
  <section class="services-grid container mx-auto py-12 px-4">
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Nuestras áreas de práctica</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useServicesStore } from '@/store/services'
import ServiceCard from './ServiceCard.vue'

const servicesStore = useServicesStore()
const services = ref(servicesStore.services)

onMounted(async () => {
  if (!servicesStore.loaded) {
    await servicesStore.fetchServices()
  }
  services.value = servicesStore.services
})
</script>

<style scoped>
</style>