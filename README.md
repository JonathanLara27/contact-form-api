# 🛡️ Contact Form API (Backend)

API REST desarrollada con **NestJS** para gestionar la recepción de mensajes de contacto. Este proyecto sirve como backend para un bloque personalizado web, implementando persistencia en **MySQL**, validaciones estrictas y documentación automática.

## 🚀 Stack Tecnológico

* **Framework:** NestJS (Node.js).
* **Base de Datos:** MySQL 8.0 (Contenerizada en Docker).
* **ORM:** TypeORM.
* **Validación:** `class-validator` & `class-transformer`.
* **Documentación:** Swagger (OpenAPI).
* **Entorno:** Configuración mediante `@nestjs/config`.

## 📋 Prerrequisitos

* Node.js v18+.
* Docker & Docker Compose.
* pnpm (recomendado) o npm.

## ⚙️ Configuración del Entorno

1.  **Clonar el repositorio e instalar dependencias:**
    ```bash
    npm install
    # o
    pnpm install
    ```

2.  **Variables de Entorno:**
    Crea un archivo `.env` en la raíz basado en el siguiente ejemplo:
    ```ini
    # Server Config
    PORT=3001
    
    # Database Config (Docker)
    DB_HOST=localhost
    DB_PORT=3307
    DB_USERNAME=leasein_user
    DB_PASSWORD=leasein_password
    DB_DATABASE=contactos_db
    
    # Swagger Config
    SWAGGER_PATH=docs
    SWAGGER_TITLE=Contact Form API
    SWAGGER_DESC=API para gestión de formulario de contacto
    ```

3.  **Levantar Base de Datos (Docker):**
    ```bash
    docker-compose up -d
    ```

## ▶️ Ejecución

Iniciar el servidor en modo desarrollo:

```bash
npm run start:dev

```

La aplicación estará disponible en: `http://localhost:3001/api`

## 📚 Documentación API

La documentación interactiva (Swagger) se genera automáticamente en:

👉 **[http://localhost:3001/api/docs](https://www.google.com/search?q=http://localhost:3001/api/docs)**

### Endpoints Principales

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `POST` | `/api/contactos` | Guardar un nuevo mensaje de contacto |
| `GET` | `/api/contactos` | Listar historial de mensajes |

## 🛡️ Características de Seguridad y Calidad

* **Global Validation Pipe:** Se utiliza `whitelist: true` y `forbidNonWhitelisted: true` para rechazar automáticamente cualquier dato que no esté definido en los DTOs.
* **CORS Habilitado:** Configurado para permitir peticiones desde el cliente frontend local.
* **Prefix Global:** Toda la API se sirve bajo el prefijo `/api`.
* **Typing:** Uso estricto de TypeScript en Entidades y DTOs.