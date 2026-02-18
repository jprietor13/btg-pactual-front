#  BTG Pactual -- Frontend

Aplicación SPA desarrollada con **React + Vite + TypeScript** para la
gestión de fondos de bgt-pactual.

Este frontend consume una API REST (btg-pactual-backend) y permite:

-   Autenticación con JWT
-   Registro e inicio de sesión
-   Visualización de fondos disponibles
-   Suscripción y cancelación de fondos
-   Consulta de historial de transacciones
-   Visualización y actualización dinámica del saldo
-   Interfaz moderna con TailwindCSS

------------------------------------------------------------------------

# Tecnologías Utilizadas

-   React 18
-   Vite
-   TypeScript
-   React Router
-   Axios
-   TailwindCSS
-   Context API
-   Custom Hooks
-   Arquitectura modular por dominio

------------------------------------------------------------------------

# Arquitectura del Proyecto

El frontend está organizado por dominios funcionales y capas internas,
promoviendo:

-   Separación de responsabilidades
-   Bajo acoplamiento
-   Reutilización de lógica
-   Escalabilidad

Estructura principal:

    src/
     ├── core/
     │    ├── api/
     │    ├── providers/
     │    └── router/
     │
     ├── modules/
     │    ├── auth/
     │    ├── funds/
     │    └── transactions/
     ── shared/
     │    ├── components/
     │    ├── hooks/

------------------------------------------------------------------------

# Descripción Detallada de Carpetas

## core/

Contiene infraestructura compartida por toda la aplicación.

### - api/

Encapsula la configuración del cliente HTTP (Axios):

-   Configuración de `baseURL` mediante variables de entorno.
-   Envío automático del token JWT en cada request.
-   Centralización de headers comunes.

------------------------------------------------------------------------

###  - providers/

Contiene los contextos globales de la aplicación.

#### AuthProvider

Responsable de:

-   Guardar el usuario autenticado.
-   Guardar el token JWT.
-   Manejar estado de inicialización.
-   Exponer `login()` y `logout()`.
-   Exponer `refreshUser()` para actualizar el saldo en tiempo real.

Este provider permite que el saldo se actualice automáticamente después
de suscribirse o cancelar un fondo.

------------------------------------------------------------------------

### - router/

Encargado de la configuración de rutas.

Incluye:

-   ProtectedRoute → protege rutas privadas.
-   ProtectedLayout → layout con navbar y saldo visible.
-   Redirecciones automáticas según estado de autenticación.

------------------------------------------------------------------------

# - modules/

Cada módulo representa un dominio independiente.

------------------------------------------------------------------------

# - Módulo auth/

Encargado del registro e inicio de sesión.

Estructura:

    auth/
     ├── application/
     ├── domain/
     ├── infrastructure/
     └── ui/

### application/

Contiene hooks con la lógica del dominio:

-   useLogin
-   useRegister

Gestionan estados de: - loading - error - comunicación con la API

------------------------------------------------------------------------

### domain/

Define los tipos y modelos del dominio:

-   AuthUser

------------------------------------------------------------------------

### infrastructure/

Implementación concreta que consume la API:

-   AuthApiRepository

Encapsula llamadas HTTP como:

-   login
-   register
-   me

------------------------------------------------------------------------

### ui/

Componentes visuales:

-   LoginPage
-   RegisterPage
-   Formularios estilizados con TailwindCSS

------------------------------------------------------------------------

# Módulo funds/

Gestiona la visualización y operación sobre fondos.

Estructura:

    funds/
     ├── application/
     ├── domain/
     ├── infrastructure/
     └── ui/

------------------------------------------------------------------------

### application/

Hook principal:

#### useFunds

Responsable de:

-   Obtener lista de fondos.
-   Suscribirse a un fondo.
-   Cancelar suscripción.
-   Manejar estado de carga por acción.
-   Manejar errores.
-   Calcular estado derivado (`subscriptionMap`) basado en
    transacciones.
-   Sincronizar saldo usando `refreshUser()`.

------------------------------------------------------------------------

### domain/

Define el modelo:

-   Fund

------------------------------------------------------------------------

### infrastructure/

Repositorio que implementa:

-   getAll()
-   subscribe()
-   cancel()

------------------------------------------------------------------------

### ui/

Componentes:

-   FundsPage
-   FundsList

Incluye:

-   Botón dinámico Subscribe / Cancel
-   Indicador de carga por fondo
-   Manejo visual de errores

------------------------------------------------------------------------

# Módulo transactions/

Encargado del historial de movimientos.

Estructura:

    transactions/
     ├── application/
     ├── domain/
     ├── infrastructure/
     └── ui/

------------------------------------------------------------------------

### application/

Hook principal:

-   useTransactions

Permite:

-   Obtener historial
-   Refrescar manualmente (refetch)

------------------------------------------------------------------------

### domain/

Modelo:

-   Transaction

------------------------------------------------------------------------

### infrastructure/

Repositorio para obtener historial desde la API.

------------------------------------------------------------------------

### ui/

Componentes:

-   TransactionsPage
-   TransactionsTable

Incluye:

-   Ordenamiento por fecha
-   Visualización de tipo de transacción
-   Estado vacío estilizado

------------------------------------------------------------------------

# Sincronización en Tiempo Real

Después de suscribirse o cancelar un fondo:

1.  Se actualizan las transacciones.
2.  Se ejecuta `refreshUser()`.
3.  El saldo se actualiza automáticamente en el navbar.
4.  El botón cambia dinámicamente entre Subscribe y Cancel.

No es necesario recargar la página.

------------------------------------------------------------------------

# Interfaz

-   Layout protegido con navegación superior.
-   Navbar con saldo visible.
-   Manejo visual de estados de carga.
-   Manejo elegante de errores.
-   Diseño minimalista con TailwindCSS.

------------------------------------------------------------------------

# Cómo Ejecutar el Proyecto

## Requisitos

-   Node.js \>= 18
-   npm

------------------------------------------------------------------------

## Instalación

``` bash
git clone <https://github.com/jprietor13/btg-pactual-front.git>
cd btg-pactual-frontend
npm install
```

------------------------------------------------------------------------

## Variables de entorno

Crear archivo `.env` en la raíz:

    VITE_API_URL=http://localhost:3000

------------------------------------------------------------------------

## Ejecutar

``` bash
npm run dev
```

Abrir en:

    http://localhost:5173

------------------------------------------------------------------------

# Flujo de Prueba

1.  Registrar usuario.
2.  Iniciar sesión.
3.  Ver saldo disponible en navbar.
4.  Suscribirse a un fondo.
5.  Ver que el saldo disminuye automáticamente.
6.  Cancelar suscripción.
7.  Ver que el saldo aumenta automáticamente.
8.  Revisar historial de transacciones.

------------------------------------------------------------------------

# Decisiones Técnicas Clave

-   Arquitectura modular por dominio.
-   Separación clara entre UI, lógica y acceso a datos.
-   Estado derivado para determinar suscripciones activas.
-   Sin duplicación de estado.
-   Sincronización automática del usuario tras operaciones.
-   Uso de Context API en lugar de librerías externas de estado global.

------------------------------------------------------------------------

# Autor

Juan Prieto
Full Stack Developer
jp1739@gmail.com
