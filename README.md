# Web Abogado – Estudio Jurídico Braian Geréz

Este proyecto implementa la estructura base para el sitio web del **Estudio Jurídico Braian Geréz**, especializado en accidentes laborales y enfermedades profesionales. Está construido con **Vue 3**, **Pinia**, **Vue Router** y configura soporte para PWA, SEO local y accesibilidad.

## Estructura del proyecto

```
web-abogado/
├── package.json          # Dependencias y scripts
├── vite.config.ts        # Configuración de Vite y PWA
├── tsconfig.json         # Configuración de TypeScript
├── index.html            # Plantilla HTML principal
├── public/
│   ├── assets/           # Imágenes y logos optimizados
│   ├── data/services.json# Datos de servicios (MVP)
│   ├── favicon.ico
│   ├── manifest.webmanifest
│   └── sitemap.xml
└── src/
    ├── main.ts           # Punto de entrada de Vue
    ├── App.vue           # Componente raíz
    ├── router/index.ts   # Configuración de rutas
    ├── store/index.ts    # Estado global con Pinia
    ├── components/       # Componentes reutilizables
    └── pages/            # Vistas de cada sección
```

## Scripts

- `npm run dev`: inicia el servidor de desarrollo en `http://localhost:5173`.
- `npm run build`: genera la versión optimizada para producción en `dist/`.
- `npm run preview`: sirve la versión de producción localmente.
- `npm run test:unit`: ejecuta las pruebas unitarias con Vitest.
- `npm run test:e2e`: abre Cypress para pruebas end‑to‑end.

## Instalación

1. Instale las dependencias con `npm install`.
2. Ejecute `npm run dev` para iniciar el servidor de desarrollo.

> **Nota:** Este repositorio contiene la estructura y componentes básicos. Deberá añadir estilos finales, contenido real y configurar las claves de Google Analytics 4, Meta Pixel y reCAPTCHA según las instrucciones del plan.