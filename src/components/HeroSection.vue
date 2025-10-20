<template>
  <section
    class="hero-section py-16 text-center text-white relative overflow-hidden"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute inset-0 bg-black opacity-60"></div>
    <div class="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {{ claim }}
      </h1>
      <p class="text-lg md:text-xl mb-8 max-w-2xl">
        {{ subclaim }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <router-link
          v-for="cta in ctas"
          :key="cta.text"
          :to="cta.to"
          class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded shadow-md transition"
        >
          {{ cta.text }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  claim: {
    type: String,
    default: '¿Sufriste un accidente laboral?'
  },
  subclaim: {
    type: String,
    default: 'Recibí asesoramiento legal especializado en accidentes de trabajo y enfermedades profesionales.'
  },
  ctas: {
    type: Array as () => { text: string; to: string }[],
    default: () => [
      { text: 'Consulta gratuita', to: '/contacto' },
      { text: 'Áreas de práctica', to: '/servicios' }
    ]
  },
  backgroundImage: {
    type: String,
    default: '/assets/hero-bg.png'
  }
})
</script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
}
.bg-primary {
  background-color: #0A3C6E;
}
.bg-primary-dark {
  background-color: #082b4f;
}
</style>