-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: hydropulse
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `monthly_predictions`
--

DROP TABLE IF EXISTS `monthly_predictions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monthly_predictions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `prediction_month` varchar(20) DEFAULT NULL,
  `predicted_usage` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `monthly_predictions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monthly_predictions`
--

LOCK TABLES `monthly_predictions` WRITE;
/*!40000 ALTER TABLE `monthly_predictions` DISABLE KEYS */;
/*!40000 ALTER TABLE `monthly_predictions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sustainability_benchmarks`
--

DROP TABLE IF EXISTS `sustainability_benchmarks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sustainability_benchmarks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `recommended_limit` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sustainability_benchmarks`
--

LOCK TABLES `sustainability_benchmarks` WRITE;
/*!40000 ALTER TABLE `sustainability_benchmarks` DISABLE KEYS */;
INSERT INTO `sustainability_benchmarks` VALUES (1,'daily_total',150.00),(2,'shower',50.00),(3,'laundry',40.00),(4,'garden',30.00);
/*!40000 ALTER TABLE `sustainability_benchmarks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_streaks`
--

DROP TABLE IF EXISTS `user_streaks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_streaks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `current_streak` int DEFAULT '0',
  `longest_streak` int DEFAULT '0',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `user_streaks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_streaks`
--

LOCK TABLES `user_streaks` WRITE;
/*!40000 ALTER TABLE `user_streaks` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_streaks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `daily_goal_liters` int DEFAULT '150',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Rohit Rajput','rohit@gmail.com','$2b$10$yJwOqKcbZgBiUGTW.TQdKeHU5hMh7qaN5ao1GKCo5nDUj/i6mVHYS',150,'2026-05-15 11:26:14'),(3,'Prasad ','prasad@gmail.com','$2b$10$G3H1owIyVZz4kUSSRZj/Qe2TmZMn14LPhJUYDHIj7rcWRCDUGIeZK',300,'2026-05-15 14:23:45'),(4,'Prasad Jadhav','prasad2@gmail.com','$2b$10$CH5cCEAW6W9ta3K.x6fDp.coHNF7JYzmULMq3xXgeku/r4I8s4A1.',150,'2026-05-15 14:40:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `water_logs`
--

DROP TABLE IF EXISTS `water_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `water_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `log_date` date NOT NULL,
  `shower_minutes` int DEFAULT '0',
  `dishwasher_loads` int DEFAULT '0',
  `laundry_loads` int DEFAULT '0',
  `cooking_liters` decimal(10,2) DEFAULT '0.00',
  `drinking_liters` decimal(10,2) DEFAULT '0.00',
  `garden_liters` decimal(10,2) DEFAULT '0.00',
  `carwash_liters` decimal(10,2) DEFAULT '0.00',
  `indoor_usage` decimal(10,2) DEFAULT '0.00',
  `outdoor_usage` decimal(10,2) DEFAULT '0.00',
  `total_usage` decimal(10,2) DEFAULT '0.00',
  `sustainability_status` enum('LOW','AVERAGE','HIGH') DEFAULT 'AVERAGE',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `water_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `water_logs`
--

LOCK TABLES `water_logs` WRITE;
/*!40000 ALTER TABLE `water_logs` DISABLE KEYS */;
INSERT INTO `water_logs` VALUES (6,2,'2026-05-15',10,1,1,5.00,3.00,20.00,15.00,138.00,35.00,173.00,'AVERAGE','2026-05-15 12:31:26'),(7,2,'2026-05-15',12,1,2,5.00,3.00,20.00,10.00,181.00,30.00,211.00,'HIGH','2026-05-15 13:19:31'),(9,2,'2026-05-11',10,3,5,5.00,20.00,20.00,40.00,285.00,60.00,345.00,'HIGH','2026-05-15 13:24:51'),(10,2,'2026-05-13',10,10,10,10.00,10.00,20.00,20.00,510.00,40.00,550.00,'HIGH','2026-05-15 13:52:54'),(11,2,'2026-04-08',9,2,3,5.00,10.00,10.00,20.00,201.00,30.00,231.00,'HIGH','2026-05-15 13:59:38'),(12,2,'2026-03-15',20,3,5,3.00,4.00,5.00,10.00,357.00,15.00,372.00,'HIGH','2026-05-15 14:00:26'),(13,4,'2026-05-12',10,10,5,10.00,10.00,20.00,10.00,385.00,30.00,415.00,'HIGH','2026-05-15 17:18:05');
/*!40000 ALTER TABLE `water_logs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-19 22:22:35
