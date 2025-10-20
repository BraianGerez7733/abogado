<template>
  <div id="app" class="flex flex-col min-h-screen">
    <!-- Barra de navegación principal -->
    <Navbar />
    <!-- Contenido de la ruta -->
    <router-view />
    <!-- Componentes globales -->
    <CookieConsent />
    <WhatsAppButtons />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import CookieConsent from '@/components/CookieConsent.vue';
import WhatsAppButtons from '@/components/WhatsAppButtons.vue';
</script>

<style>
/* Estilos globales básicos. Puede utilizar utilidades de Tailwind o su propia
   hoja de estilos personalizada. */
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  background-color: #F5F5F5;
  color: #1A1A1A;
}
</style>