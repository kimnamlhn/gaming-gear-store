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
  `phone` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `role` binary(1) DEFAULT NULL,
  PRIMARY KEY (`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetail` (
  `idOrder` int NOT NULL,
  `idProduct` int NOT NULL,
  `quantityOrder` int DEFAULT NULL,
  `product_idProduct` int NOT NULL,
  `order_idOrder` int NOT NULL,
  PRIMARY KEY (`idOrder`,`idProduct`,`product_idProduct`,`order_idOrder`),
  KEY `fk_orderDetail_product1_idx` (`product_idProduct`),
  KEY `fk_orderDetail_order1_idx` (`order_idOrder`),
  CONSTRAINT `fk_orderDetail_order1` FOREIGN KEY (`order_idOrder`) REFERENCES `orders` (`idOrder`),
  CONSTRAINT `fk_orderDetail_product1` FOREIGN KEY (`product_idProduct`) REFERENCES `product` (`idProduct`)
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
  `orderDate` date DEFAULT NULL,
  `shippedDate` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `idCustomer` int DEFAULT NULL,
  `idPayment` int DEFAULT NULL,
  `customer_idCustomer` int NOT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `fk_order_customer1_idx` (`customer_idCustomer`),
  CONSTRAINT `fk_order_customer1` FOREIGN KEY (`customer_idCustomer`) REFERENCES `account` (`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `idpayment` int NOT NULL AUTO_INCREMENT,
  `idCustomer` int DEFAULT NULL,
  `paymentDate` date DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `customer_idCustomer` int NOT NULL,
  `order_idOrder` int NOT NULL,
  PRIMARY KEY (`idpayment`),
  KEY `fk_payment_customer_idx` (`customer_idCustomer`),
  KEY `fk_payment_order1_idx` (`order_idOrder`),
  CONSTRAINT `fk_payment_customer` FOREIGN KEY (`customer_idCustomer`) REFERENCES `account` (`idAccount`),
  CONSTRAINT `fk_payment_order1` FOREIGN KEY (`order_idOrder`) REFERENCES `orders` (`idOrder`)
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
  `name` varchar(100) DEFAULT NULL,
  `generalInfo` mediumtext,
  `description` mediumtext,
  `detaildescription` longtext,
  `rating` float DEFAULT NULL,
  `price` double DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `brand` varchar(30) DEFAULT NULL,
  `thumbnail` varchar(45) DEFAULT NULL,
  `category` int DEFAULT NULL,
  `images` int DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  KEY `fk_category_product_idx` (`category`),
  CONSTRAINT `fk_category_product` FOREIGN KEY (`category`) REFERENCES `category` (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_comments`
--

DROP TABLE IF EXISTS `product_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_comments` (
  `idComment` int NOT NULL,
  `rating` int NOT NULL,
  `content` mediumtext,
  `creationAt` datetime DEFAULT NULL,
  `idAccount` int NOT NULL,
  `idProduct` int NOT NULL,
  PRIMARY KEY (`idComment`),
  KEY `fk_comment_account_idx` (`idAccount`) /*!80000 INVISIBLE */,
  KEY `fk_comment_product_idx` (`idProduct`),
  CONSTRAINT `fk_comment_account` FOREIGN KEY (`idAccount`) REFERENCES `account` (`idAccount`),
  CONSTRAINT `fk_comment_product` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
  KEY `product_idx` (`product`),
  CONSTRAINT `fk_image_product` FOREIGN KEY (`product`) REFERENCES `product` (`idProduct`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-26  1:42:04
