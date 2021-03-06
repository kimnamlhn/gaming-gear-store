-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `idAccount` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(60) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` mediumtext,
  `phone` int DEFAULT NULL,
  `role` tinyint DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `locked` tinyint NOT NULL,
  `token` varchar(45) DEFAULT NULL,
  `tokenExpire` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `idCart` int NOT NULL AUTO_INCREMENT,
  `idAccount` int DEFAULT NULL,
  `idSession` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idCart`),
  UNIQUE KEY `idAccount_UNIQUE` (`idAccount`),
  UNIQUE KEY `idSession_UNIQUE` (`idSession`) USING BTREE,
  KEY `fk_account_cart_idx` (`idAccount`),
  CONSTRAINT `fk_account_cart` FOREIGN KEY (`idAccount`) REFERENCES `account` (`idAccount`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `idCartItems` int NOT NULL AUTO_INCREMENT,
  `idCart` int NOT NULL,
  `idProduct` int NOT NULL,
  `quantity` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idCartItems`),
  KEY `fk_cart_idx` (`idCart`),
  KEY `fk_product_idx` (`idProduct`) USING BTREE,
  CONSTRAINT `fk_cart_cart_items` FOREIGN KEY (`idCart`) REFERENCES `cart` (`idCart`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_cart_items` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `idCategory` int NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `idOrderDetail` int NOT NULL,
  `idOrder` int DEFAULT NULL,
  `idProduct` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`idOrderDetail`),
  UNIQUE KEY `order_product_unique` (`idOrder`,`idProduct`),
  KEY `fk_product_order_detail_idx` (`idProduct`),
  KEY `fk_order_order_detail_idx` (`idOrder`),
  CONSTRAINT `fk_order_order_detail` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`idOrder`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_order_detail` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `idOrder` int NOT NULL AUTO_INCREMENT,
  `idAccount` int DEFAULT NULL,
  `note` mediumtext,
  `status` varchar(45) DEFAULT NULL,
  `creationDate` date DEFAULT NULL,
  `shippedDate` date DEFAULT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `fk_order_account_idx` (`idAccount`),
  CONSTRAINT `fk_order_account` FOREIGN KEY (`idAccount`) REFERENCES `account` (`idAccount`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `idPayment` int NOT NULL AUTO_INCREMENT,
  `idOrder` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `creationDate` date DEFAULT NULL,
  PRIMARY KEY (`idPayment`),
  UNIQUE KEY `idOrder_UNIQUE` (`idOrder`),
  CONSTRAINT `fk_payment_order` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`idOrder`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `generalInfo` text,
  `detailedDescription` text,
  `price` double NOT NULL,
  `stock` int NOT NULL,
  `brand` varchar(30) NOT NULL,
  `thumbnail` varchar(45) DEFAULT NULL,
  `category` int NOT NULL,
  `creationDate` date NOT NULL,
  `views` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idProduct`),
  KEY `fk_category_product_idx` (`category`) USING BTREE,
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`idCategory`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_comments`
--

DROP TABLE IF EXISTS `product_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_comments` (
  `idComment` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `rating` int NOT NULL,
  `content` text,
  `creationAt` date DEFAULT NULL,
  `idAccount` int DEFAULT NULL,
  `idProduct` int NOT NULL,
  PRIMARY KEY (`idComment`),
  KEY `fk_comment_account_idx` (`idAccount`) USING BTREE,
  KEY `fk_comment_product_idx` (`idProduct`) USING BTREE,
  CONSTRAINT `product_comments_ibfk_1` FOREIGN KEY (`idAccount`) REFERENCES `account` (`idAccount`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_comments_ibfk_2` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `idImages` int NOT NULL AUTO_INCREMENT,
  `product` int NOT NULL,
  `imageurl` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idImages`,`product`),
  KEY `product_idx` (`product`) USING BTREE,
  CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product`) REFERENCES `product` (`idProduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-31 23:29:43
