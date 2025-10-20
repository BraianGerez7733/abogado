import { defineStore } from 'pinia';

/**
 * Pinia store para gestionar consultas enviadas desde el formulario.
 * Por ahora solo almacena las consultas localmente; en producción se integrará con un backend o API de correo.
 */
export const useConsultationStore = defineStore('consultas', {
  state: () => ({
    consultas: [] as Array<Record<string, any>>,
    sending: false,
    error: null as string | null
  }),
  actions: {
    async enviarConsulta(consulta: Record<string, any>) {
      this.sending = true;
      this.error = null;
      try {
        // Simulación de envío: en un futuro se integrará con un servicio externo (Gmail API, CRM).
        console.log('Enviando consulta', consulta);
        // Aquí podría agregarse reCAPTCHA o validación adicional.
        this.consultas.push({ ...consulta, fecha: new Date().toISOString() });
      } catch (e) {
        this.error = (e as Error).message;
      } finally {
        this.sending = false;
      }
    }
  }
});