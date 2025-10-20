<template>
  <main>
    <ServiceDetail :service="service" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useServicesStore } from '@/store/services'
import ServiceDetail from '@/components/ServiceDetail.vue'

const route = useRoute()
const servicesStore = useServicesStore()
const service = ref(null as any)

onMounted(async () => {
  if (!servicesStore.loaded) {
    await servicesStore.fetchServices()
  }
  service.value = servicesStore.services.find(s => s.slug === route.params.slug)
})
</script>