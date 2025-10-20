import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Importa tus componentes de página de forma diferida (lazy‑loading)
const Landing = () => import('@/pages/Landing.vue')
const Home = () => import('@/pages/Home.vue')
const Services = () => import('@/pages/Services.vue')
const ServiceDetailPage = () => import('@/pages/ServiceDetailPage.vue')
const Blog = () => import('@/pages/Blog.vue')
const TestimonialsPage = () => import('@/pages/TestimonialsPage.vue')
const Contact = () => import('@/pages/Contact.vue')
const WhereWeAre = () => import('@/pages/WhereWeAre.vue')
const Terms = () => import('@/pages/Terms.vue')
const Privacy = () => import('@/pages/Privacy.vue')
const Cookies = () => import('@/pages/Cookies.vue')

const routes: RouteRecordRaw[] = [
  // La ruta raíz ahora usa Home.vue en lugar de Landing.vue
  { path: '/', name: 'Home', component: Home },
  // Ruta opcional para la landing si quieres conservarla
  { path: '/landing', name: 'Landing', component: Landing },
  { path: '/servicios', name: 'Services', component: Services },
  { path: '/servicios/:slug', name: 'ServiceDetail', component: ServiceDetailPage },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/testimonios', name: 'Testimonials', component: TestimonialsPage },
  { path: '/contacto', name: 'Contact', component: Contact },
  { path: '/donde-estamos', name: 'WhereWeAre', component: WhereWeAre },
  { path: '/terminos', name: 'Terms', component: Terms },
  { path: '/privacidad', name: 'Privacy', component: Privacy },
  { path: '/cookies', name: 'Cookies', component: Cookies }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
