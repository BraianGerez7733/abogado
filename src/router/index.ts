import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Import page components. These are lazy‑loaded to enable code splitting.
const Landing = () => import('@/pages/Landing.vue');
const Services = () => import('@/pages/Services.vue');
const ServiceDetailPage = () => import('@/pages/ServiceDetailPage.vue');
const Blog = () => import('@/pages/Blog.vue');
const TestimonialsPage = () => import('@/pages/TestimonialsPage.vue');
const Contact = () => import('@/pages/Contact.vue');
const WhereWeAre = () => import('@/pages/WhereWeAre.vue');
const Terms = () => import('@/pages/Terms.vue');
const Privacy = () => import('@/pages/Privacy.vue');
const Cookies = () => import('@/pages/Cookies.vue');

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Landing },
  { path: '/servicios', name: 'Services', component: Services },
  { path: '/servicios/:slug', name: 'ServiceDetail', component: ServiceDetailPage },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/testimonios', name: 'Testimonials', component: TestimonialsPage },
  { path: '/contacto', name: 'Contact', component: Contact },
  { path: '/donde-estamos', name: 'WhereWeAre', component: WhereWeAre },
  { path: '/terminos', name: 'Terms', component: Terms },
  { path: '/privacidad', name: 'Privacy', component: Privacy },
  { path: '/cookies', name: 'Cookies', component: Cookies }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
