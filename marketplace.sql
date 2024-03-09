-- Create user roles
CREATE USER admin_user WITH PASSWORD '8mp7WuR9Qb';
ALTER USER admin_user WITH SUPERUSER;

-- Create the seller table
CREATE TABLE seller (
    seller_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

-- Create the client table
CREATE TABLE client (
    client_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

-- Create the locale table
CREATE TABLE locale (
    locale_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO locale (name) VALUES 
('US English'),
('French'),
('Spanish');

-- Create the product table
CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    seller_id INT REFERENCES seller(seller_id) ON DELETE CASCADE,
    price NUMERIC(10, 2) NOT NULL,
    locale_id INT REFERENCES locale(locale_id) ON DELETE CASCADE
    currency_code VARCHAR(3) NOT NULL
);

