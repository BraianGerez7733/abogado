import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue/client'  // Import correcto según Unhead v2:contentReference[oaicite:3]{index=3}

const head = createHead()
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(head)                                     // Registrar la instancia
app.mount('#app')
