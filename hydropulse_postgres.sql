-- PostgreSQL schema dump for HydroPulse
-- Use this file to import schema and seed data into Neon PostgreSQL

-- Drop tables if they exist (order is important due to foreign key constraints)
DROP TABLE IF EXISTS monthly_predictions CASCADE;
DROP TABLE IF EXISTS user_streaks CASCADE;
DROP TABLE IF EXISTS water_logs CASCADE;
DROP TABLE IF EXISTS sustainability_benchmarks CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Drop custom types if they exist
DROP TYPE IF EXISTS sustainability_status_enum;

-- Create enum type for sustainability status
CREATE TYPE sustainability_status_enum AS ENUM ('LOW', 'AVERAGE', 'HIGH');

-- 1. Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  daily_goal_liters INTEGER DEFAULT 150,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Water Logs Table
CREATE TABLE water_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  shower_minutes INTEGER DEFAULT 0,
  dishwasher_loads INTEGER DEFAULT 0,
  laundry_loads INTEGER DEFAULT 0,
  cooking_liters DECIMAL(10,2) DEFAULT 0.00,
  drinking_liters DECIMAL(10,2) DEFAULT 0.00,
  garden_liters DECIMAL(10,2) DEFAULT 0.00,
  carwash_liters DECIMAL(10,2) DEFAULT 0.00,
  indoor_usage DECIMAL(10,2) DEFAULT 0.00,
  outdoor_usage DECIMAL(10,2) DEFAULT 0.00,
  total_usage DECIMAL(10,2) DEFAULT 0.00,
  sustainability_status sustainability_status_enum DEFAULT 'AVERAGE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Sustainability Benchmarks Table
CREATE TABLE sustainability_benchmarks (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) DEFAULT NULL,
  recommended_limit DECIMAL(10,2) DEFAULT NULL
);

-- 4. User Streaks Table
CREATE TABLE user_streaks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Monthly Predictions Table
CREATE TABLE monthly_predictions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  prediction_month VARCHAR(20) DEFAULT NULL,
  predicted_usage DECIMAL(10,2) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- SEED DATA
-- ==========================================

-- Seed sustainability benchmarks
INSERT INTO sustainability_benchmarks (id, category, recommended_limit) VALUES 
(1, 'daily_total', 150.00),
(2, 'shower', 50.00),
(3, 'laundry', 40.00),
(4, 'garden', 30.00);

-- Adjust SERIAL sequence for sustainability_benchmarks
SELECT setval(pg_get_serial_sequence('sustainability_benchmarks', 'id'), coalesce(max(id), 1)) FROM sustainability_benchmarks;

-- Seed default users (with password hashes from original database, password: "password" or similar)
INSERT INTO users (id, full_name, email, password_hash, daily_goal_liters, created_at) VALUES
(2, 'Rohit Rajput', 'rohit@gmail.com', '$2b$10$yJwOqKcbZgBiUGTW.TQdKeHU5hMh7qaN5ao1GKCo5nDUj/i6mVHYS', 150, '2026-05-15 11:26:14'),
(3, 'Prasad ', 'prasad@gmail.com', '$2b$10$G3H1owIyVZz4kUSSRZj/Qe2TmZMn14LPhJUYDHIj7rcWRCDUGIeZK', 300, '2026-05-15 14:23:45'),
(4, 'Prasad Jadhav', 'prasad2@gmail.com', '$2b$10$CH5cCEAW6W9ta3K.x6fDp.coHNF7JYzmULMq3xXgeku/r4I8s4A1.', 150, '2026-05-15 14:40:19');

-- Adjust SERIAL sequence for users
SELECT setval(pg_get_serial_sequence('users', 'id'), coalesce(max(id), 1)) FROM users;

-- Seed water logs
INSERT INTO water_logs (id, user_id, log_date, shower_minutes, dishwasher_loads, laundry_loads, cooking_liters, drinking_liters, garden_liters, carwash_liters, indoor_usage, outdoor_usage, total_usage, sustainability_status, created_at) VALUES
(6, 2, '2026-05-15', 10, 1, 1, 5.00, 3.00, 20.00, 15.00, 138.00, 35.00, 173.00, 'AVERAGE', '2026-05-15 12:31:26'),
(7, 2, '2026-05-15', 12, 1, 2, 5.00, 3.00, 20.00, 10.00, 181.00, 30.00, 211.00, 'HIGH', '2026-05-15 13:19:31'),
(9, 2, '2026-05-11', 10, 3, 5, 5.00, 20.00, 20.00, 40.00, 285.00, 60.00, 345.00, 'HIGH', '2026-05-15 13:24:51'),
(10, 2, '2026-05-13', 10, 10, 10, 10.00, 10.00, 20.00, 20.00, 510.00, 40.00, 550.00, 'HIGH', '2026-05-15 13:52:54'),
(11, 2, '2026-04-08', 9, 2, 3, 5.00, 10.00, 10.00, 20.00, 201.00, 30.00, 231.00, 'HIGH', '2026-05-15 13:59:38'),
(12, 2, '2026-03-15', 20, 3, 5, 3.00, 4.00, 5.00, 10.00, 357.00, 15.00, 372.00, 'HIGH', '2026-05-15 14:00:26'),
(13, 4, '2026-05-12', 10, 10, 5, 10.00, 10.00, 20.00, 10.00, 385.00, 30.00, 415.00, 'HIGH', '2026-05-15 17:18:05');

-- Adjust SERIAL sequence for water_logs
SELECT setval(pg_get_serial_sequence('water_logs', 'id'), coalesce(max(id), 1)) FROM water_logs;
