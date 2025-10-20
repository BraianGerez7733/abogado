<template>
  <header class="navbar" role="navigation" aria-label="barra de navegación">
    <nav class="container">
      <RouterLink to="/" class="logo" aria-label="Inicio">Estudio Jurídico Braian Geréz</RouterLink>
      <ul class="nav-links" role="menubar">
        <li role="none"><RouterLink to="/" role="menuitem">Inicio</RouterLink></li>
        <li role="none"><RouterLink to="/servicios" role="menuitem">Áreas de práctica</RouterLink></li>
        <li role="none"><RouterLink to="/testimonios" role="menuitem">Testimonios</RouterLink></li>
        <li role="none"><RouterLink to="/blog" role="menuitem">Blog</RouterLink></li>
        <li role="none"><RouterLink to="/contacto" role="menuitem">Contacto</RouterLink></li>
        <li role="none"><RouterLink to="/donde-estamos" role="menuitem">Dónde estamos</RouterLink></li>
      </ul>
      <div class="cta-buttons">
        <RouterLink to="/contacto" class="btn btn-primary" aria-label="Solicitá una consulta gratuita">Consulta gratuita</RouterLink>
        <a href="https://wa.me/542964540752" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" aria-label="Escribinos por WhatsApp">WhatsApp</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.navbar {
  background-color: #66b2ff; /* celeste claro */
  color: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover,
.nav-links a:focus {
  text-decoration: underline;
  outline: none;
}

.cta-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
}

.btn-primary {
  background-color: #00bcd4; /* turquesa suave */
  color: #FFFFFF;
}

.btn-secondary {
  background-color: #f39c12; /* naranja profesional */
  color: #FFFFFF;
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
  color: #FFFFFF;
  text-decoration: none;
}
</style>
