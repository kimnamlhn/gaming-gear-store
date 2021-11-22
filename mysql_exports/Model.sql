CREATE DATABASE  IF NOT EXISTS `mydb`
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.27

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `idAccount` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `role` binary(1) DEFAULT NULL,
  PRIMARY KEY (`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;


--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `idCategory` int NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;


--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
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

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
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

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
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

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `brand` varchar(30) DEFAULT NULL,
  `images` varchar(45) DEFAULT NULL,
  `category` int DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  KEY `fk_category_product_idx` (`category`),
  CONSTRAINT `fk_category_product` FOREIGN KEY (`category`) REFERENCES `category` (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- Dump completed on 2021-11-23  1:37:12
