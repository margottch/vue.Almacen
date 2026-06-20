## 🔑 Credenciales de Acceso

Para probar la funcionalidad del login en el sistema, utiliza los siguientes datos de acceso:

* **Usuario:** `margot.tintaya`
* **Contraseña:** `itpm2026`

# vue.Almacen
login con almacen 

# 📦 vue.Almacen - Sistema de Gestión ITPM

Este es un sistema web interactivo y responsivo para la gestión de inventario de un almacén, construido utilizando **Vue 3** (Composition API) y estilizado con **Bootstrap 5**.

El proyecto simula un entorno seguro mediante un formulario de autenticación (Login) que, al ser validado con éxito, da acceso a un panel con una cuadrícula interactiva de productos disponibles en el almacén.

---

## 🚀 Características Clave

* **🔒 Login de Autenticación:** Control de acceso mediante un estado reactivo que oculta o muestra el panel principal.
* **📱 Diseño Responsivo:** Implementación de tarjetas (*Cards*) adaptables a cualquier tamaño de pantalla gracias a Bootstrap.
* **⚡ Reactividad con Vue 3:** Manejo eficiente de variables de estado con `ref` para el control de formularios y el listado dinámico de productos.
* **🖼️ Vista de Inventario:** Renderizado dinámico de productos que incluye imágenes reales, identificadores únicos, precios (Bs.) y cantidades en stock.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5** - Estructura semántica del sitio.
* **Bootstrap 5** - Framework CSS para el diseño rápido, moderno y responsivo.
* **Vue 3 (CDN)** - Framework de JavaScript para la lógica reactiva (`createApp`, `ref`, `v-if`, `v-for`).

---


## 📂 Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos esenciales:

* `index.html`: Estructura principal, llamado a librerías externas (Bootstrap, Vue 3) y contenedor de la aplicación (`#app`).
* `type.js`: Lógica completa de Vue 3, que incluye la definición del componente, el estado de autenticación, el arreglo de productos y el *template* HTML insertado dinámicamente.

---

## ⚙️ Cómo Ejecutar el Proyecto

1. Descarga o clona este repositorio en tu máquina local.
2. Asegúrate de tener ambos archivos (`index.html` y `type.js`) en la misma carpeta.
3. Abre el archivo `index.html` en cualquier navegador web moderno. ¡No requiere instalación de dependencias ni servidores complejos gracias al uso de CDNs!
