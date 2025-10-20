<template>
  <div v-if="visible" class="cookie-consent fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50">
    <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="flex-1 text-sm">
        Utilizamos cookies para mejorar tu experiencia y analizar el tráfico. Puedes aceptar o rechazar el uso de cookies no esenciales.
      </p>
      <div class="flex gap-2">
        <button @click="reject" class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm">
          Rechazar
        </button>
        <button @click="accept" class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm">
          Aceptar
        </button>
        <router-link to="/cookies" class="text-blue-400 underline text-sm">Configuración</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  const consent = localStorage.getItem('cookie_consent')
  if (!consent) {
    visible.value = true
  }
})

function accept() {
  localStorage.setItem('cookie_consent', 'accepted')
  visible.value = false
}

function reject() {
  localStorage.setItem('cookie_consent', 'rejected')
  visible.value = false
}
</script>

<style scoped>
.cookie-consent a {
  color: #90cdf4;
}
</style>