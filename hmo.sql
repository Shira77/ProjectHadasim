-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hmo
-- ------------------------------------------------------
-- Server version	8.0.29

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

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `ID` varchar(255) NOT NULL,
  `Adress` varchar(255) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `MobilePhone` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('Shira','Erlanger','123456789','achia','2021-03-20','0548578955','026458895','https://d15djgxczo4v72.cloudfront.net/s3fs-public/styles/inner_page_header/public/legacy_files/imce/uploads/sunflower.jpg?itok=ZPmh_B5T'),('Chaya','Erlanger','987654321','achia','2005-03-20','0548898955','026458495','https://d15djgxczo4v72.cloudfront.net/s3fs-public/styles/inner_page_header/public/legacy_files/imce/uploads/sunflower.jpg?itok=ZPmh_B5T');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `IDEmployee` varchar(255) NOT NULL,
  `Positive` date DEFAULT NULL,
  `Recovery` date DEFAULT NULL,
  PRIMARY KEY (`IDEmployee`),
  CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`IDEmployee`) REFERENCES `employee` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES ('123456789','2021-03-20','2030-03-20'),('987654321','2002-03-20',NULL);
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccinated`
--

DROP TABLE IF EXISTS `vaccinated`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaccinated` (
  `IDEmployee` varchar(255) NOT NULL,
  `vaccinationDate1` date DEFAULT NULL,
  `Manufacturer1` varchar(255) DEFAULT NULL,
  `vaccinationDate2` date DEFAULT NULL,
  `Manufacturer2` varchar(255) DEFAULT NULL,
  `vaccinationDate3` date DEFAULT NULL,
  `Manufacturer3` varchar(255) DEFAULT NULL,
  `vaccinationDate4` date DEFAULT NULL,
  `Manufacturer4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IDEmployee`),
  CONSTRAINT `vaccinated_ibfk_1` FOREIGN KEY (`IDEmployee`) REFERENCES `employee` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccinated`
--

LOCK TABLES `vaccinated` WRITE;
/*!40000 ALTER TABLE `vaccinated` DISABLE KEYS */;
INSERT INTO `vaccinated` VALUES ('123456789','2031-03-20','Faizer','2023-05-20','Faizer','2005-04-20','Faizer','2005-04-20','Faizer');
/*!40000 ALTER TABLE `vaccinated` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-11 20:52:39
