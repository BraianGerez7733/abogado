import { defineStore } from 'pinia';

/**
 * Pinia store para la gestión de servicios.
 * Carga los servicios desde un archivo JSON localizado en /public/data/services.json.
 */
export const useServiceStore = defineStore('services', {
  state: () => ({
    services: [] as Array<Record<string, any>>,
    loading: false
  }),
  actions: {
    async fetchServices() {
      this.loading = true;
      try {
        const response = await fetch('/data/services.json');
        if (!response.ok) throw new Error('No se pudo cargar services.json');
        const data = await response.json();
        this.services = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
});