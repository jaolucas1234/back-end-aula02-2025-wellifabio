drop database if exists clinica;
CREATE DATABASE clinica;
USE clinica;

CREATE TABLE clientes(
    id_cliente INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    nascimento VARCHAR(255) NOT NULL
);

CREATE table medicos(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    crm VARCHAR(20) NOT NULL,
    especialidade VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL );


ALTER TABLE clientes CHANGE COLUMN nascimento nascimento DATE;
DESCRIBE clientes;