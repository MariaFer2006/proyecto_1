-- Crear base de datos
CREATE DATABASE kawak_db;

-- Conectar a la base de datos
\c kawak_db;

-- Tabla de usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    empresa VARCHAR(255),
    rol VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de solicitudes de demo
CREATE TABLE demo_requests (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    empresa VARCHAR(255),
    rol VARCHAR(100),
    necesidades TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de contactos
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    empresa VARCHAR(255),
    mensaje TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de newsletter
CREATE TABLE newsletter (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_demo_requests_email ON demo_requests(email);
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_newsletter_email ON newsletter(email);
