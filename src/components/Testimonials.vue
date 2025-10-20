<template>
  <section class="testimonials bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">Testimonios de clientes</h2>
      <div class="relative max-w-2xl mx-auto">
        <div class="bg-white shadow-md rounded p-6 text-center">
          <p class="text-lg italic mb-4">"{{ currentTestimonial.text }}"</p>
          <p class="font-semibold">— {{ currentTestimonial.author }}</p>
        </div>
        <div class="flex justify-between mt-4">
          <button @click="prev" aria-label="Anterior" class="text-primary hover:text-primary-dark">◀</button>
          <button @click="next" aria-label="Siguiente" class="text-primary hover:text-primary-dark">▶</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const testimonials = [
  {
    author: 'María',
    text: 'Gracias al estudio pude obtener la indemnización que merecía. Su atención fue excelente.'
  },
  {
    author: 'Juan',
    text: 'Profesionalismo y dedicación. Me acompañaron en todo el proceso y me brindaron tranquilidad.'
  },
  {
    author: 'Ana',
    text: 'Recomiendo totalmente. Resolvieron mi caso de enfermedad profesional con éxito.'
  }
]

const current = ref(0)
const currentTestimonial = computed(() => testimonials[current.value])

function prev() {
  current.value = (current.value + testimonials.length - 1) % testimonials.length
}

function next() {
  current.value = (current.value + 1) % testimonials.length
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