<script lang="ts" setup>
import { computed } from 'vue'
import { useHead } from 'unhead'              // Importa useHead desde 'unhead'

// Objeto JSON‑LD para los datos de tu negocio
const jsonLd = computed(() => {
  const business = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'LegalService'],
    '@id': 'https://example.com',
    name: 'Estudio Jurídico Braian Geréz',
    image: 'https://example.com/assets/hero-bg.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Don Bosco 715',
      addressLocality: 'Río Grande',
      addressRegion: 'Tierra del Fuego',
      addressCountry: 'AR',
      postalCode: 'V9420'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -53.785,
      longitude: -67.706
    },
    url: 'https://example.com',
    telephone: '+54 2964 540752',
    email: 'estudiojuridicobg.clientes@gmail.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://wa.me/542964540752',
      'https://www.facebook.com/',
      'https://www.linkedin.com/'
    ],
    description: 'Abogado especializado en accidentes de trabajo y enfermedades profesionales en Río Grande y Buenos Aires.'
  }
  return JSON.stringify(business)
})

// Inyecta el script JSON‑LD en la etiqueta <head>
// Usa innerHTML en vez de children (según la guía de migración)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: jsonLd.value,
      key: 'local-seo'  // opcional: sirve para deduplicar si cambias el script
    }
  ]
})
</script>

<template>
  <!-- Este componente no renderiza nada visible -->
  <div></div>
</template>
