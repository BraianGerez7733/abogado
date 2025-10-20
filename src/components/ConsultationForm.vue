<template>
  <section class="consultation-form max-w-xl mx-auto bg-white shadow-md rounded p-6">
    <h2 class="text-2xl font-bold mb-4 text-center text-primary">Consulta gratuita</h2>
    <form @submit.prevent="handleSubmit">
      <div v-if="step === 1">
        <p class="mb-4 text-gray-700">Completa tus datos personales.</p>
        <div class="mb-4">
          <label for="nombre" class="block mb-1 font-medium">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            v-model="form.nombre"
            class="w-full border rounded px-3 py-2"
            :aria-invalid="errors.nombre ? 'true' : 'false'"
            aria-required="true"
          />
          <p v-if="errors.nombre" class="text-red-600 text-sm mt-1">{{ errors.nombre }}</p>
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-1 font-medium">Correo electrónico</label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            class="w-full border rounded px-3 py-2"
            :aria-invalid="errors.email ? 'true' : 'false'"
            aria-required="true"
          />
          <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
        </div>
        <div class="mb-4">
          <label for="telefono" class="block mb-1 font-medium">Teléfono</label>
          <input
            id="telefono"
            type="tel"
            v-model="form.telefono"
            class="w-full border rounded px-3 py-2"
            :aria-invalid="errors.telefono ? 'true' : 'false'"
            aria-required="true"
          />
          <p v-if="errors.telefono" class="text-red-600 text-sm mt-1">{{ errors.telefono }}</p>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            @click="goToStep2"
            class="bg-primary text-white py-2 px-4 rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
      <div v-else-if="step === 2">
        <p class="mb-4 text-gray-700">Describe brevemente tu situación.</p>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Tipo de consulta</label>
          <select v-model="form.tipo" class="w-full border rounded px-3 py-2">
            <option value="accidente">Accidente laboral</option>
            <option value="enfermedad">Enfermedad profesional</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="descripcion" class="block mb-1 font-medium">Descripción del incidente</label>
          <textarea
            id="descripcion"
            v-model="form.descripcion"
            rows="4"
            class="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="fecha" class="block mb-1 font-medium">Fecha del incidente</label>
          <input
            id="fecha"
            type="date"
            v-model="form.fecha"
            class="w-full border rounded px-3 py-2"
          />
        </div>
        <div class="mb-4">
          <label for="empleador" class="block mb-1 font-medium">Empleador</label>
          <input
            id="empleador"
            type="text"
            v-model="form.empleador"
            class="w-full border rounded px-3 py-2"
          />
        </div>
        <div class="flex justify-between">
          <button
            type="button"
            @click="goToStep(1)"
            class="bg-gray-300 text-gray-800 py-2 px-4 rounded"
          >
            Atrás
          </button>
          <button
            type="button"
            @click="goToStep(3)"
            class="bg-primary text-white py-2 px-4 rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
      <div v-else>
        <p class="mb-4 text-gray-700">
          Revisa la información ingresada. Al enviar este formulario, aceptas nuestro aviso legal y política de privacidad. Nos comunicaremos contigo a la brevedad.
        </p>
        <ul class="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Nombre:</strong> {{ form.nombre }}</li>
          <li><strong>Email:</strong> {{ form.email }}</li>
          <li><strong>Teléfono:</strong> {{ form.telefono }}</li>
          <li><strong>Tipo:</strong> {{ form.tipo === 'accidente' ? 'Accidente laboral' : 'Enfermedad profesional' }}</li>
          <li><strong>Descripción:</strong> {{ form.descripcion || '—' }}</li>
          <li><strong>Fecha:</strong> {{ form.fecha || '—' }}</li>
          <li><strong>Empleador:</strong> {{ form.empleador || '—' }}</li>
        </ul>
        <div class="mb-4 flex items-center gap-2">
          <input
            id="aceptar"
            type="checkbox"
            v-model="form.aceptaAviso"
            class="mr-2"
          />
          <label for="aceptar" class="text-sm text-gray-700">
            He leído y acepto el aviso legal y la política de privacidad.
          </label>
        </div>
        <p v-if="errors.aviso" class="text-red-600 text-sm mb-2">{{ errors.aviso }}</p>
        <div class="flex justify-between">
          <button
            type="button"
            @click="goToStep(2)"
            class="bg-gray-300 text-gray-800 py-2 px-4 rounded"
          >
            Atrás
          </button>
          <button
            type="submit"
            :disabled="sending"
            class="bg-primary text-white py-2 px-4 rounded"
          >
            {{ sending ? 'Enviando...' : 'Enviar consulta' }}
          </button>
        </div>
        <p v-if="error" class="text-red-600 text-sm mt-2">{{ error }}</p>
        <p v-if="success" class="text-green-700 text-sm mt-2">¡Consulta enviada con éxito! Nos pondremos en contacto pronto.</p>
      </div>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useConsultationStore } from '@/store/consultas'

const step = ref(1)
const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  tipo: 'accidente',
  descripcion: '',
  fecha: '',
  empleador: '',
  aceptaAviso: false
})
const errors = reactive<{ [key: string]: string }>({})
const sending = ref(false)
const error = ref<string | null>(null)
const success = ref(false)

const consultasStore = useConsultationStore()

function goToStep(n: number) {
  step.value = n
  // Reset errors when changing steps
  Object.keys(errors).forEach(key => (errors[key] = ''))
}

function validateStep1() {
  errors.nombre = form.nombre.trim() ? '' : 'El nombre es obligatorio.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Ingresa un email válido.'
  errors.telefono = form.telefono.trim() ? '' : 'El teléfono es obligatorio.'
  return !errors.nombre && !errors.email && !errors.telefono
}

function validateStep3() {
  errors.aviso = form.aceptaAviso ? '' : 'Debes aceptar el aviso legal y la política de privacidad.'
  return !errors.aviso
}

function goToStep2IfValid() {
  if (validateStep1()) {
    goToStep(2)
  }
}

// Overwrite goToStep in step1 next button

function handleSubmit() {
  // Validate step3
  if (!validateStep3()) {
    return
  }
  sending.value = true
  error.value = null
  consultasStore
    .enviarConsulta({ ...form })
    .then(() => {
      success.value = true
      // Reset form after success
      Object.assign(form, {
        nombre: '',
        email: '',
        telefono: '',
        tipo: 'accidente',
        descripcion: '',
        fecha: '',
        empleador: '',
        aceptaAviso: false
      })
      step.value = 1
    })
    .catch((e: any) => {
      error.value = e.message || 'Error al enviar la consulta.'
    })
    .finally(() => {
      sending.value = false
    })
}

// intercept next step from step1

const goToStep2 = () => {
  if (validateStep1()) {
    goToStep(2)
  }
}

</script>

<style scoped>
.text-primary {
  color: #0A3C6E;
}
</style>