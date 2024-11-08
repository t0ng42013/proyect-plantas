# 🌿 Jardín de Sueños

## 📋 Tabla de Contenidos
- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Conexión Frontend-Backend](#conexión-frontend-backend)
- [Endpoints de la API](#endpoints-de-la-api)
- [Flujo de Autenticación](#flujo-de-autenticación)
- [Niveles de Autorización](#niveles-de-autorización)
- [Base de Datos](#base-de-datos)
- [Estado del Proyecto](#estado-del-proyecto)
- [Contacto](#contacto)
- [Agradecimientos](#agradecimientos)

## 📝 Descripción
**Jardín de Sueños** es una aplicación web e-commerce desarrollada como proyecto integrador para el curso de desarrollo web. La plataforma permite a los usuarios explorar y comprar una amplia variedad de plantas, ofreciendo una experiencia de compra intuitiva y agradable.

## ✨ Características
- Catálogo de productos con filtrado y búsqueda
- Carrito de compras interactivo
- Sistema de autenticación de usuarios con JWT
- Gestión de perfiles de usuario
- Sistema de comentarios y reseñas
- Panel de administración
- Diseño responsive
- Validación de formularios
- Manejo de estado global
- Alertas y notificaciones interactivas

## 🛠 Tecnologías Utilizadas

### Core
- React 18
- TypeScript
- Vite

### Estado y Routing
- Redux Toolkit
- React Redux
- React Router DOM

### Formularios y Validación
- Formik
- Yup

### UI/UX
- React Icons
- Animate.css
- SweetAlert2

### Herramientas de Desarrollo
- ESLint
- TypeScript ESLint
- SWC (compiler)

### Networking
- Axios
- JWT Decode

## 📋 Requisitos Previos
- **Node.js** (versión 14 o superior)
- **npm** (versión 6 o superior)
- Conexión a Internet para las dependencias CDN
- Backend del proyecto corriendo localmente

## 🚀 Instalación
1. Clona el repositorio:
    ```bash
    git clone <url-del-repositorio>
    ```
2. Accede a la carpeta del proyecto:
    ```bash
    cd jardin-de-suenos
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## 💻Uso
Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

## 🔌Conexión Frontend-Backend
El frontend se comunica con el backend a través de **Axios** utilizando **JWT** para autenticar y autorizar las solicitudes.

## 🛣Endpoints de la API


### Productos

| Método | Endpoint | Descripción | Autorización |
|--------|----------|-------------|--------------|
| GET | `/api/products` | Obtiene todos los productos | Público |
| POST | `/api/products` | Crea un nuevo producto | Admin |
| PUT | `/api/products/:id` | Actualiza un producto | Admin |
| DELETE | `/api/products/:id` | Elimina un producto | Admin |

### Usuario

| Método | Endpoint | Descripción | Autorización |
|--------|----------|-------------|--------------|
| POST | `/api/auth/register` | Registra un nuevo usuario | Público |
| POST | `/api/auth/login` | Inicia sesión | Usuario |
| GET | `/api/user` | Obtiene todos los usuarios | Admin |
| POST | `/api/user/:id` | Actualiza un producto | Admin |
| POST | `/api/user/:id` | Elimina un producto | Admin |

### Comenatarios

| Método | Endpoint | Descripción | Autorización |
|--------|----------|-------------|--------------|
| GET | `/api/comments` | Obtiene todos los comentarios | Público |
| POST | `/api/comments` | Crea un nuevo comentario | Usuario o Admin |
| PUT | `/api/comments/:id` | Actualiza un comentario | Usuario o Admin |
| DELETE | `/api/comments/:id` | Elimina un comentario | Admin |


### Órdenes
| Método | Endpoint | Descripción | Autorización |
|--------|----------|-------------|--------------|
| GET | `/api/orders` | Obtiene todas las órdenes | Usuario |
| POST | `/api/orders` | Crea una nueva orden | Usuario |


## 🔐Flujo de Autenticación
- El usuario puede registrarse o iniciar sesión.
- Al iniciar sesión, se genera un **JWT**.
- El **JWT** se almacena en el almacenamiento local del navegador y se utiliza para autenticar las solicitudes a la API.

## 👥Niveles de Autorización
- **Usuario estándar**: Acceso al catálogo de productos, carrito de compras y perfil.
- **Administrador**: Acceso al panel de administración para gestionar productos y usuarios.

## 📊Base de Datos
La base de datos se gestiona utilizando **MongoDB**, con colecciones para usuarios, productos, comentarios y órdenes de compra.

## 🚧Estado del Proyecto
Actualmente en fase de desarrollo. Algunas funcionalidades aún están siendo implementadas, pero la mayoría del sistema está operativa.

## 📧Contacto
Si tienes alguna pregunta o sugerencia, puedes contactar con el equipo de desarrollo a través de los siguientes medios:

- Correo electrónico: tonga88@live.com.ar


## 🙏Agradecimientos
Agradecemos a todos los participantes en este proyecto, así como a los docentes del curso por su apoyo y orientación durante el proceso de desarrollo.


⌨️ con ❤️ por Gastón Alonso 😊