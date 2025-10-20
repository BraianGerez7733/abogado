<template>
  <main>
    <!-- Sección principal con descripción y CTA -->
    <section class="flex flex-col md:flex-row items-center justify-between py-12 px-6 max-w-6xl mx-auto">
      <div class="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
          ¿Sufriste un accidente laboral?
        </h1>
        <p class="text-lg md:text-xl mb-4">
          Recibí asesoramiento legal especializado en accidentes de trabajo y enfermedades profesionales en Río Grande y Buenos Aires. Con más de 15 años de experiencia, defendemos tus derechos y te acompañamos durante todo el proceso.
        </p>
        <p class="text-lg md:text-xl mb-6">
          Nuestro equipo analiza cada caso en profundidad, recopila la documentación necesaria y negocia con empleadores o ART, litigando cuando es necesario, para conseguir la indemnización que mereces. Creemos en la transparencia y la ética y nos caracterizamos por la eficacia: la primera consulta es gratuita y sin compromiso, y solo cobramos honorarios si ganamos tu caso (no win–no fee). Te acompañamos desde el primer momento hasta el cierre del expediente, ofreciéndote asesoramiento personalizado y un trato humano. Contactá con nosotros hoy para conocer cómo podemos ayudarte.
        </p>
      </div>
      <div class="md:w-1/3 flex flex-col space-y-4 w-full max-w-xs">
        <router-link to="/contacto" class="block py-3 px-5 text-white font-semibold text-center rounded-lg shadow-lg bg-primary hover:bg-primary-dark">
          Solicitar consulta
        </router-link>
        <router-link to="/servicios" class="block py-3 px-5 text-white font-semibold text-center rounded-lg shadow-lg bg-primary hover:bg-primary-dark">
          Conocer servicios
        </router-link>
        <!-- Aquí podrías añadir botones para enlaces externos cuando los tengas -->
      </div>
    </section>

    <LocalSEO />

    <section aria-labelledby="services-heading">
      <ServicesGrid />
    </section>

    <BackgroundParallax image="/assets/hero-bg.png">
      <h2 class="text-2xl md:text-3xl font-bold">Protegemos tus derechos laborales</h2>
      <p class="mt-2 max-w-md mx-auto">
        Te acompañamos en el camino para obtener la compensación que mereces. Nuestro equipo se especializa en accidentes y enfermedades laborales.
      </p>
    </BackgroundParallax>

    <!-- Proceso de trabajo -->
    <section class="py-12 bg-white" aria-labelledby="how-we-work">
      <div class="container mx-auto px-4">
        <h2 id="how-we-work" class="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">¿Cómo trabajamos?</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <span class="text-4xl text-primary font-bold">1</span>
            <h3 class="text-lg font-semibold mt-2">Consulta inicial</h3>
            <p class="text-gray-600 text-sm">Exploramos tu caso y determinamos la mejor estrategia.</p>
          </div>
          <div>
            <span class="text-4xl text-primary font-bold">2</span>
            <h3 class="text-lg font-semibold mt-2">Recolección de pruebas</h3>
          <p class="text-gray-600 text-sm">Reunimos documentación y testimonios para respaldar tu reclamo.</p>
          </div>
          <div>
            <span class="text-4xl text-primary font-bold">3</span>
            <h3 class="text-lg font-semibold mt-2">Negociación o litigio</h3>
            <p class="text-gray-600 text-sm">Negociamos con la ART o empleador; si es necesario, litigamos en tu nombre.</p>
          </div>
          <div>
            <span class="text-4xl text-primary font-bold">4</span>
            <h3 class="text-lg font-semibold mt-2">Resolución y cierre</h3>
            <p class="text-gray-600 text-sm">Conseguimos la compensación y gestionamos el cierre de tu caso.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Honorarios -->
    <section class="py-12 bg-gray-50" aria-labelledby="fees-section">
      <div class="container mx-auto px-4 text-center">
        <h2 id="fees-section" class="text-2xl md:text-3xl font-bold mb-6 text-primary">Honorarios</h2>
        <p class="max-w-2xl mx-auto text-gray-700 mb-4">
          Trabajamos bajo un esquema de <strong>no win–no fee</strong>: si no ganamos tu caso, no cobramos honorarios. La primera consulta es totalmente gratuita y sin compromiso.
        </p>
        <router-link to="/contacto" class="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded">Solicitá tu consulta gratuita</router-link>
      </div>
    </section>

    <!-- Video -->
    <VideoBlock video-id="" />

    <!-- Testimonios -->
    <Testimonials />

    <!-- Contacto rápido -->
    <section class="py-12 bg-white" aria-labelledby="quick-contact">
      <div class="container mx-auto px-4">
        <h2 id="quick-contact" class="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">Contacto rápido</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-6 rounded shadow">
            <h3 class="text-xl font-semibold mb-3">Formulario de consulta</h3>
            <ConsultationForm />
          </div>
          <div class="flex flex-col justify-center items-center">
            <p class="text-lg mb-4">¿Preferís comunicarte por WhatsApp?</p>
            <a
              href="https://wa.me/542964540752"
              target="_blank"
              rel="noopener"
              class="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path d="M.057 24l1.687-6.163c-.987-1.743-1.51-3.7-1.51-5.742 0-6.556 5.373-11.906 12-11.906 3.191 0 6.2 1.24 8.477 3.514 2.278 2.275 3.523 5.282 3.523 8.473 0 6.556-5.373 11.906-12 11.906-1.99 0-3.951-.5-5.688-1.448l-6.489 1.366zm6.597-3.807c1.676.995 3.294 1.591 5.346 1.591 5.448 0 9.885-4.422 9.885-9.852 0-5.43-4.437-9.852-9.885-9.852-5.442 0-9.885 4.422-9.885 9.852 0 2.236.684 3.999 1.842 5.637l-.999 3.648 3.696-.984zm10.325-5.464c-.077-.124-.141-.124-.269-.045-.398.226-1.304.642-1.506.724-.201.077-.37.112-.538-.113-.161-.225-.617-.724-.757-.873-.141-.15-.269-.169-.467-.056-.196.113-.834.309-1.588.985-.586.515-.977 1.153-1.089 1.278-.113.124-.024.243.056.343.077.113.201.283.353.461.124.169.248.35.372.5.121.15.249.169.434.056.186-.113 1.056-.489 2.011-1.556.95-1.067 1.334-1.985 1.401-2.124.07-.141.016-.22-.061-.343m-2.364-5.471c-.498-.113-.924.077-1.159.498-.242.428-.902 1.272-1.098 1.465-.201.201-.422.226-.621.226-.2 0-.432-.019-.663-.019-.229 0-.602.087-.915.428-.314.343-1.207 1.171-1.207 2.895 0 1.724 1.232 3.396 1.404 3.633.171.226 2.375 3.79 5.744 5.141 3.37 1.352 3.863.903 4.562.843.698-.06 2.225-.906 2.541-1.783.314-.877.314-1.63.224-1.783-.091-.151-.335-.226-.698-.397-.363-.172-2.228-1.099-2.575-1.226-.348-.127-.6-.191-.853.172-.254.364-.977 1.225-1.196 1.469-.221.244-.445.277-.82.096-.377-.182-1.567-.577-2.986-1.843-1.103-.984-1.854-2.201-2.071-2.575-.216-.374-.023-.576.164-.748.167-.159.375-.414.563-.621.188-.206.25-.344.376-.569.126-.226.053-.428-.026-.601-.083-.169-.732-1.751-1.001-2.42-.268-.669-.54-.58-.732-.589-.19-.009-.408-.011-.628-.011-.221 0-.578.083-.883.206" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import ServicesGrid from '@/components/ServicesGrid.vue'
import BackgroundParallax from '@/components/BackgroundParallax.vue'
import VideoBlock from '@/components/VideoBlock.vue'
import Testimonials from '@/components/Testimonials.vue'
import ConsultationForm from '@/components/ConsultationForm.vue'
import LocalSEO from '@/components/LocalSEO.vue'
</script>

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
