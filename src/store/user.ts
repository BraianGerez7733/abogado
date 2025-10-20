import { defineStore } from 'pinia';

/**
 * Pinia store para el usuario. Guarda datos del usuario cuando se implementen
 * funcionalidades de inicio de sesión o personalización. Actualmente solo
 * proporciona un nombre y un idioma por defecto.
 */
export const useUserStore = defineStore('user', {
  state: () => ({
    nombre: '',
    idioma: 'es'
  }),
  actions: {
    setNombre(nombre: string) {
      this.nombre = nombre;
    },
    setIdioma(idioma: string) {
      this.idioma = idioma;
    }
  }
});