# 🔐 Authentication API

## 📄 Descripción

Esta API permite agregar usuarios a una base de datos PostgreSQL (aunque puede adaptarse a otras bases de datos) y generar un token JWT para autenticar a los usuarios registrados al momento de iniciar sesión.

---

## 🛠️ Tecnologías Utilizadas

### 🚀 Spring Boot

- **spring-boot-starter-data-jpa**  
  Soporte para JPA (Hibernate). Ideal para trabajar con bases de datos relacionales mediante repositorios.

- **spring-boot-starter-security**  
  Añade características de autenticación y autorización.

- **spring-boot-starter-web**  
  Permite el desarrollo de aplicaciones web, incluidas APIs RESTful.

- **spring-boot-starter-validation**  
  Soporta validación de beans (`@NotNull`, `@Size`, etc.).

- **spring-boot-starter-test**  
  Herramientas para pruebas unitarias e integración.

---

### 🐘 PostgreSQL

- **org.postgresql:postgresql**  
  Driver JDBC para conectar con bases de datos PostgreSQL.

---

### ✨ Lombok

- **org.projectlombok:lombok**  
  Reduce el código repetitivo en Java (getters, setters, constructores, etc.).

- **annotationProcessor**  
  Necesario para que Lombok funcione correctamente durante la compilación.

---

### ✅ JUnit & Testing

- **spring-security-test**  
  Herramientas para testear características de Spring Security.

- **junit-platform-launcher**  
  Permite ejecutar pruebas con la plataforma JUnit (útil con integraciones o runners personalizados).

---

### 🔐 JWT (JSON Web Tokens)

- **io.jsonwebtoken:jjwt-api**
- **io.jsonwebtoken:jjwt-impl**
- **io.jsonwebtoken:jjwt-jackson**  
  Librerías para crear y validar tokens JWT en aplicaciones Java.

---

### 🛡️ Spring Security Crypto

- **spring-security-crypto**  
  Utilidades criptográficas como codificación de contraseñas (`BCryptPasswordEncoder`, etc.).

---

### 🌿 Dotenv

- **io.github.cdimascio:dotenv-java**  
  Carga variables de entorno desde un archivo `.env`. Útil para manejar configuraciones sensibles.

# ⚙️ Environment Variables - Authentication Service

This section lists all the environment variables used in the `application.properties` file, along with their purposes and examples.

---

## 🌐 Application Configuration

| Variable | Purpose | Example |
|----------|---------|---------|
| `SPRING_APPLICATION_NAME` | Name of the Spring Boot application (optional if set explicitly). | `authentication` |

---

## 🗄️ Database Configuration

| Variable | Purpose | Example |
|----------|---------|---------|
| `SPRING_DATASOURCE_URL` | JDBC URL for connecting to the PostgreSQL database. | `jdbc:postgresql://localhost:5432/mydb` |
| `SPRING_DATASOURCE_USERNAME` | Username to access the PostgreSQL database. | `postgres` |
| `SPRING_DATASOURCE_PASSWORD` | Password for the PostgreSQL database. | `mysecretpassword` |

---

## 🔐 JWT Configuration

| Variable | Purpose | Example |
|----------|---------|---------|
| `JWT_SECRET` | Secret key used to sign and validate JWT tokens. | `mySuperSecretKey123` |
| `JWT_EXPIRATION` | Token expiration time in milliseconds. | `86400000` (24 hours) |

---

✅ **Note:**  
All variables should be defined in a `.env` file (if you're using dotenv) or set as environment variables in your deployment environment.

Example `.env` file:

```env
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/mydb
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=mysecretpassword

JWT_SECRET=mySuperSecretKey123
JWT_EXPIRATION=86400000


# 📡 Available Endpoints - Authentication API

## 🔐 JWT Configuration

JWT is used for securing API endpoints via token-based authentication.

**Configuration variables:**

```properties
jwt.secret=${JWT_SECRET}
jwt.expiration=${JWT_EXPIRATION}
```

These values are loaded from environment variables or `.env` file.

---

## 📚 Required Dependencies for JWT

Only the essential libraries used to generate and validate JWT tokens are listed here:

```groovy
implementation 'org.springframework.boot:spring-boot-starter-security'
implementation 'io.jsonwebtoken:jjwt-api:0.11.5'
runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.11.5'
runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.11.5'
implementation 'org.springframework.security:spring-security-crypto'
implementation 'io.github.cdimascio:dotenv-java:3.0.0'
```

---

## 🚀 Endpoints

### 1. 🔧 User Registration

- **URL:** `POST http://localhost:8080/culti/auth/signup`
- **Description:** Creates a new user and returns a JWT token.
- **Headers:**
    - `Content-Type: application/json`
- **Request Body Example:**

```json
{
  "email": "dan07@gmail.com",
  "password": "1234599"
}
```

- **Success Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

- **Status Codes:**
    - `201 Created`: User created successfully.
    - `400 Bad Request`: Invalid data.
    - `409 Conflict`: User already exists.

---

### 2. 🔓 User Login

- **URL:** `POST http://localhost:8080/culti/auth/signin`
- **Description:** Authenticates a user and returns a JWT token.
- **Headers:**
    - `Content-Type: application/json`
- **Request Body Example:**

```json
{
  "email": "dan07@gmail.com",
  "password": "1234599"
}
```

- **Success Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

- **Status Codes:**
    - `200 OK`: Login successful.
    - `400 Bad Request`: Missing or invalid fields.
    - `401 Unauthorized`: Invalid credentials.

---

# 📦 Dependencias JWT

## Librerías necesarias para JWT:
```groovy
implementation 'org.springframework.boot:spring-boot-starter-security'
implementation 'io.jsonwebtoken:jjwt-api:0.11.5'
runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.11.5'
runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.11.5'
implementation 'org.springframework.security:spring-security-crypto'
implementation 'io.github.cdimascio:dotenv-java:3.0.0'
```

# 📡 Endpoints Disponibles

## 1. 🔧 Registro de Usuario

- **URL:** `POST http://localhost:8080/culti/auth/signup`
- **Descripción:** Crea un nuevo usuario y devuelve un token JWT.
- **Encabezados:**
  - `Content-Type: application/json`

### Ejemplo de Cuerpo (JSON)
```json
{
  "email": "dan07@gmail.com",
  "password": "1234599"
}
```

### Respuesta Exitosa
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

### Códigos de Estado
- `201 Created`: Usuario creado correctamente.
- `400 Bad Request`: Datos inválidos.
- `409 Conflict`: El usuario ya existe.

---

## 2. 🔓 Inicio de Sesión

- **URL:** `POST http://localhost:8080/culti/auth/signin`
- **Descripción:** Autentica un usuario y devuelve un token JWT.
- **Encabezados:**
  - `Content-Type: application/json`

### Ejemplo de Cuerpo (JSON)
```json
{
  "email": "dan07@gmail.com",
  "password": "1234599"
}
```

### Respuesta Exitosa
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

### Códigos de Estado
- `200 OK`: Inicio de sesión exitoso.
- `400 Bad Request`: Campos faltantes o inválidos.
- `401 Unauthorized`: Credenciales incorrectas.

# 📘 Notas Adicionales

- Todas las solicitudes y respuestas utilizan formato JSON.
- Los tokens JWT deben incluirse en el encabezado Authorization en los endpoints protegidos:

```http
Authorization: Bearer <token>
```

# 🗂️ Estructura del Proyecto

```text
C:.
│   .gitattributes
│   .gitignore
│   build.gradle
│   estructura.txt
│   gradlew
│   gradlew.bat
│   settings.gradle
│
├───.gradle
│   └───...
├───.idea
│   └───...
├───gradle
│   └───wrapper
│           gradle-wrapper.jar
│           gradle-wrapper.properties
│
└───src
    ├───main
    │   ├───java
    │   │   └───culti
    │   │       └───authentication
    │   │           │   AuthenticationApplication.java
    │   │           │
    │   │           ├───application
    │   │           │   ├───security
    │   │           │   │       AuthEntryPointJwt.java
    │   │           │   │       AuthTokenFilter.java
    │   │           │   │       JwtUtil.java
    │   │           │   │       WebSecurityConfig.java
    │   │           │   │
    │   │           │   ├───services
    │   │           │   │       CustomUserDetailsService.java
    │   │           │   │       UserServices.java
    │   │           │   │
    │   │           │   └───usecases
    │   │           │           UserValidations.java
    │   │           │
    │   │           ├───controllers
    │   │           │       AuthController.java
    │   │           │
    │   │           ├───model
    │   │           │       User.java
    │   │           │
    │   │           └───repository
    │   │                   UserRepository.java
    │   │
    │   └───resources
    │           application.properties
    │           banner.txt
    │
    └───test
        └───java
            └───culti
                └───authentication
                        AuthenticationApplicationTests.java
```

## ✅ Notes

- All requests and responses use **JSON** format.
- JWT tokens must be included in the `Authorization` header for protected endpoints:  
  `Authorization: Bearer <token>`


