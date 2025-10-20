<template>
  <main class="container mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-6 text-primary text-center">¿Dónde estamos?</h1>
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <div class="flex-1">
        <h2 class="text-2xl font-semibold mb-4">Nuestra ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.5046508202948!2d-67.70405619933084!3d-53.78569549764281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb30bf3c5c0803%3A0x9f5285bdcf058059!2sDon%20Bosco%20715%2C%20V9420%20Rio%20Grande%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses!2sar!4v1698000000000!5m2!1ses!2sar"
          width="100%"
          height="350"
          style="border:0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="md:w-1/3 space-y-4">
        <h2 class="text-2xl font-semibold">Contacto</h2>
        <p class="text-gray-700"><strong>Dirección:</strong> Don Bosco 715, Río Grande, Tierra del Fuego</p>
        <p class="text-gray-700"><strong>Teléfono:</strong> <a href="tel:+542964540752" class="text-primary">+54 2964 540752</a></p>
        <p class="text-gray-700"><strong>Email:</strong> <a href="mailto:estudiojuridicobg.clientes@gmail.com" class="text-primary">estudiojuridicobg.clientes@gmail.com</a></p>
        <p class="text-gray-700"><strong>Horario de atención:</strong> Lunes a Viernes de 9:00 a 17:00</p>
        <router-link to="/contacto" class="inline-block mt-4 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded">Solicitar consulta</router-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.text-primary {
  color: #0A3C6E;
}
.bg-primary {
  background-color: #0A3C6E;
}
.bg-primary-dark {
  background-color: #082b4f;
}
</style>