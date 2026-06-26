import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductosStore = defineStore('productos', () => {
  // Estado de autenticación
  const estaLogueado = ref(false)
  const usuarioInput = ref('')
  const contrasenaInput = ref('')
  const errorMensaje = ref('')

  // Credenciales correctas
  const CREDENCIALES = {
    usuario: 'margot.tintaya',
    contrasena: 'itpm2026'
  }

  // Lista de productos
  const listaProductos = ref([
    { 
      id: 101, 
      nombre: 'Teclado Mecánico RGB', 
      precio: 250, 
      stock: 12, 
      imagen: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&auto=format&fit=crop&q=60' 
    },
    { 
      id: 102, 
      nombre: 'Mouse Óptico Inalámbrico', 
      precio: 110, 
      stock: 20, 
      imagen: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&auto=format&fit=crop&q=60' 
    },
    { 
      id: 103, 
      nombre: 'Monitor Gamer 24\' 144Hz', 
      precio: 1450, 
      stock: 5, 
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop&q=60' 
    }
  ])

  // Función para validar las credenciales
  const login = () => {
    if (usuarioInput.value === CREDENCIALES.usuario && contrasenaInput.value === CREDENCIALES.contrasena) {
      estaLogueado.value = true
      errorMensaje.value = ''
    } else {
      errorMensaje.value = 'Usuario o contraseña incorrectos.'
    }
  }

  // Función para salir del panel
  const salir = () => {
    estaLogueado.value = false
    usuarioInput.value = ''
    contrasenaInput.value = ''
    errorMensaje.value = ''
  }

  return {
    estaLogueado,
    usuarioInput,
    contrasenaInput,
    errorMensaje,
    listaProductos,
    login,
    salir
  }
})
