CREATE DATABASE  IF NOT EXISTS `skinburn` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `skinburn`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: aws-rds-db.cfrwh9mf3ygt.us-east-2.rds.amazonaws.com    Database: skinburn
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `survival_rate`
--

DROP TABLE IF EXISTS `survival_rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survival_rate` (
  `period` varchar(10) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `years_after_diagnosis` tinyint NOT NULL,
  `age_group` varchar(10) NOT NULL,
  `survival` decimal(20,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survival_rate`
--

LOCK TABLES `survival_rate` WRITE;
/*!40000 ALTER TABLE `survival_rate` DISABLE KEYS */;
INSERT INTO `survival_rate` VALUES ('2003–2007','Males',1,'20–39',98.000000),('2003–2007','Males',2,'20–39',97.000000),('2003–2007','Males',3,'20–39',96.000000),('2003–2007','Males',4,'20–39',94.900000),('2003–2007','Males',5,'20–39',94.400000),('2003–2007','Females',1,'20–39',99.500000),('2003–2007','Females',2,'20–39',98.800000),('2003–2007','Females',3,'20–39',98.300000),('2003–2007','Females',4,'20–39',97.900000),('2003–2007','Females',5,'20–39',97.500000),('2003–2007','Persons',1,'20–39',98.800000),('2003–2007','Persons',2,'20–39',98.000000),('2003–2007','Persons',3,'20–39',97.300000),('2003–2007','Persons',4,'20–39',96.600000),('2003–2007','Persons',5,'20–39',96.100000),('2008–2012','Males',1,'20–39',98.300000),('2008–2012','Males',2,'20–39',96.900000),('2008–2012','Males',3,'20–39',95.800000),('2008–2012','Males',4,'20–39',94.900000),('2008–2012','Males',5,'20–39',94.300000),('2008–2012','Females',1,'20–39',99.000000),('2008–2012','Females',2,'20–39',98.300000),('2008–2012','Females',3,'20–39',97.700000),('2008–2012','Females',4,'20–39',97.000000),('2008–2012','Females',5,'20–39',96.200000),('2008–2012','Persons',1,'20–39',98.700000),('2008–2012','Persons',2,'20–39',97.700000),('2008–2012','Persons',3,'20–39',96.800000),('2008–2012','Persons',4,'20–39',96.000000),('2008–2012','Persons',5,'20–39',95.400000),('2013–2017','Males',1,'20–39',98.900000),('2013–2017','Males',2,'20–39',97.700000),('2013–2017','Males',3,'20–39',97.000000),('2013–2017','Males',4,'20–39',96.300000),('2013–2017','Males',5,'20–39',95.700000),('2013–2017','Females',1,'20–39',99.600000),('2013–2017','Females',2,'20–39',98.900000),('2013–2017','Females',3,'20–39',98.500000),('2013–2017','Females',4,'20–39',98.000000),('2013–2017','Females',5,'20–39',97.800000),('2013–2017','Persons',1,'20–39',99.300000),('2013–2017','Persons',2,'20–39',98.400000),('2013–2017','Persons',3,'20–39',97.800000),('2013–2017','Persons',4,'20–39',97.300000),('2013–2017','Persons',5,'20–39',96.900000);
/*!40000 ALTER TABLE `survival_rate` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-19 11:42:31
