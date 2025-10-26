-- Create Database
CREATE DATABASE IF NOT EXISTS english_learning
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE english_learning;

-- Create Words Table
CREATE TABLE IF NOT EXISTS words (
  id INT AUTO_INCREMENT PRIMARY KEY,
  english VARCHAR(255) NOT NULL,
  vietnamese VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_createdAt (createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Display success message
SELECT 'Database and tables created successfully!' AS message;
