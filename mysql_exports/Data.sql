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
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'admin@gmail.com','123456',1358685356,_binary '1'),(2,'tvtinh@gmail.com','$2y$10$JRAxIxXqzh9tMxyhKuser',1369985356,_binary '1'),(3,'nhao@gmail.com','$2y$10$9gQ28K.ilrIoj66bu8aAXOqPz1OUz5Ov',136415356,_binary '1'),(4,'tvchinh@gmail.com','$2y$10$9gQ28K.ilrIoj66bu8aAXOqPz1OUz5Ov',136255356,_binary '1'),(5,'nvvui@gmail.com','$2y$10$JRAxIxXqzh9tMxyhK.oW0eOnY0',1369582356,_binary '1'),(6,'ntanh@gmail.com','$2y$10$9gQ28K',1369985356,_binary '1'),(7,'nvluong@gmail.com','$2y$10$JRAxIxXu',136285356,_binary '1'),(8,'hthe@gmail.com','$2y$10$9gQ28K.i',1369985356,_binary '1'),(9,'tvnam@gmail.com','$2y$10$JRAxIxXqzh9tMxyhK.oWeh8sZDW1NwHku',165985356,_binary '1'),(10,'tpvan@gmail.com','$2y$10$9gQ28K.ilrIoj66bcjXCbbYEi7bKq0q',1368565356,_binary '1'),(11,'lhuynh@gmail.com','$2y$10$JRAxIxXqzdeh8sZDW1NwHku',1358685356,_binary '1');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Laptop'),(2,'Phone'),(3,'Mouse'),(4,'Gaming devices'),(5,'Head phone');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
INSERT INTO `orderdetail` VALUES (1,1,4,1,1),(1,2,5,2,1),(1,3,6,3,1),(2,3,7,3,2),(2,5,21,5,2),(2,6,11,6,2),(3,4,6,4,3),(3,6,7,6,3),(4,3,5,3,4),(5,3,1,3,5),(6,3,10,3,6);
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2021-04-01','2021-04-05','Đã giao hàng',1,1,1),(2,'2021-03-12','2021-03-15','Đã giao hàng',1,2,1),(3,'2021-07-11','2021-07-15','Đã huỷ',3,3,3),(4,'2021-06-05','2021-06-09','Đã giao hàng',2,3,2),(5,'2021-03-07','2021-03-10','Đã giao hàng',2,4,2),(6,'2021-04-03','2021-04-07','Đã huỷ',3,5,3),(7,'2021-06-21','2021-06-25','Đã huỷ',4,6,4),(8,'2021-06-23','2021-06-25','Đã giao hàng',2,7,2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,'2021-06-13',50000,1,1),(2,2,'2021-07-24',250000,2,2),(3,3,'2021-07-07',130000,2,1),(4,2,'2021-05-08',120000,3,2),(5,1,'2021-04-12',50000,4,3),(6,3,'2021-05-21',750000,1,3),(7,4,'2021-06-05',120000,2,4),(8,5,'2021-07-15',100000,1,5);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Latop Gaming Dell','    <div>\n        <div>\n            <h4> Latop DELL </h4>\n            <ul>\n                <li> Best product for gaming\n                </li>\n                <li> Cam kết 100% sản phẩm Y HÌNH (hình do shop tự chụp). Tuy nhiên màu sắc có chênh lệch chút ít do ánh\n                    sáng.\n                </li>\n                <li> Anh/chị em chọn mẫu rồi chọn đúng size, MUA 2 ĐÔI KHÁC SIZE thì vui lòng cho từng size THÊM VÀO GIỎ\n                    HÀNG rồi vào giỏ hàng chọn MUA NGAY.\n                </li>\n            </ul>\n        </div>\n        <div>\n            <h4>\n                Mô Tả Sản Phẩm:\n            </h4>\n            <ul>\n                <li>\n                    Giày được làm bằng 100% chất liệu da thật, mềm và mịn.\n                </li>\n                <li>\n                    Phần đế bằng cao su đúc nguyên khối rất chắc chắn và bền.\n                </li>\n            </ul>\n        </div>\n    </div>',50000,20,'SAMSUNG','/user/img/product01.png',1,1),(2,'Iphone 15 promax','I phone hàng xin make in china\n- Len dệt chuẩn dày với độ co dãn tốt\n- Form phù hợp với mọi lứa tuổi',30000,10,'LG','/user/img/product02.png',2,2),(3,'Gaming mouse','test \\n test',100000,0,'Sony','/user/img/product03.png',3,3),(4,'Head phone provip','[Mã FATHANG5 giảm 10K đơn 50K] Nón len đen Trắng Nam Nữ Đế Êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',120000,300,'MSI','/user/img/product04.png',4,4),(5,'Samsung phone','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',150000,4,'LG','/user/img/product05.png',1,5),(6,'Phone fake','[Mã FATHANG5 giảm 10K đơn 50K] Mũ thời trang mùa đông êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',150000,4,'MSI','/user/img/product06.png',3,6);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,1,'/user/img/product01.png'),(2,1,'/user/img/product02.png'),(3,1,'/user/img/product03.png'),(4,2,'/user/img/product02.png'),(5,2,'/user/img/product02.png'),(6,2,'/user/img/product02.png'),(7,3,'/user/img/product03.png'),(8,3,'/user/img/product03.png'),(9,3,'/user/img/product03.png'),(10,4,'/user/img/product04.png'),(11,4,'/user/img/product04.png'),(12,4,'/user/img/product04.png'),(13,5,'/user/img/product05.png'),(14,5,'/user/img/product05.png'),(15,5,'/user/img/product05.png'),(16,6,'/user/img/product06.png'),(17,6,'/user/img/product06.png'),(18,6,'/user/img/product06.png'),(19,1,'/user/img/product05.png'),(20,1,'/user/img/product03.png');
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-23 18:59:02
