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
INSERT INTO `account` VALUES (1,'admin@gmail.com','$2b$10$UxgOt22zLOk0yaIi7JED/ulMjUtNf009eWmjkehQIl5Tc6wqkeGyy','Admin','23 Mercer Street',135868534,1,'2019-06-17 17:00:00','2021-12-31 08:46:47',0,'de6278b6-02c9-4c44-958e-7ea4b2f16d61','2021-12-31 08:46:47'),(2,'user@gmail.com','$2b$10$MIgWeeZH.L6weslq86MvLu/5s5a0.hHiyeRXlJmJAal011gRZzaxO','User','312321',123123,0,'2019-06-17 17:00:00','2019-06-17 17:00:00',0,NULL,NULL),(3,'123@gmail.com','$2b$10$9sW4Tmag5hNhavFurfreD.P24i6YWo2SmOmqj3seQpps07s/r3dPe','Test','123',123123123,0,'2021-12-02 10:30:27','2021-12-16 17:52:27',0,NULL,NULL),(4,'test@gmail.com','$2b$10$NDxLD7m4La9a7gspaOw1.eEivTixZ2/k5bskA7KWZ08x9Kg/X4wUq','123','123',123,0,'2021-12-02 10:31:55','2021-12-02 10:31:55',1,NULL,NULL),(5,'admin2@gmail.com','$2b$10$2HO386RnAXoKZB0uj1w.lemq4SaU0SvKv/DaIQxU1z2GHNJgQAZbO','Admin2','25 Mercer Street',23531233,1,'2021-12-02 10:30:27','2021-12-02 10:30:27',0,NULL,NULL),(8,'admin3@gmail.com','$2b$10$BhIf5vThVrtG0maqNVwUXOTi5nUEW3cjopSpTPovCgcq4QFZU0dBm','Admin3','232323',312987,1,'2021-12-02 12:59:07','2021-12-02 12:59:07',0,NULL,NULL),(13,'toai@asd.com','$2b$10$MDlXZkFTNFqavxfc4M7QOexMchJY0c0aliA1BiaQ9VrQxfQ2n4bCG','Gia Toai','0123',123,0,'2021-12-21 18:47:47','2021-12-21 18:47:58',0,NULL,NULL),(14,'toai123@gmail.com','$2b$10$NqWS3U2fskEDCDuInxM4fOS2X1TQ2CKzRGejMbfGYS05d5ohwaGf6','123123','123123',123123,0,'2021-12-27 16:51:04','2021-12-27 16:51:04',0,NULL,NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (54,NULL,'51e626ca-757d-4c1f-b267-c75d8e08b323','2021-12-23 13:34:51','2021-12-23 13:34:51'),(55,NULL,'d3e288c1-7051-4528-80fb-3601fbcd6dd5','2021-12-23 13:36:01','2021-12-23 13:36:01'),(56,NULL,'4390af1b-a669-4ea9-be0d-9d2a6ceb0946','2021-12-23 13:36:14','2021-12-23 13:36:14'),(57,NULL,'156353d4-16ba-4740-9e72-58199d2e6bf1','2021-12-23 13:36:22','2021-12-23 13:36:22'),(58,NULL,'e3ad1c89-69c2-4dc1-a18c-4012bfae3c8e','2021-12-23 13:36:56','2021-12-23 13:36:56'),(59,NULL,'49124634-9fc8-4a2b-b997-60bed1f0e934','2021-12-23 13:37:15','2021-12-23 13:37:15'),(60,NULL,'e4b2c0a7-d1c1-444b-842f-1552219fd834','2021-12-23 13:37:46','2021-12-23 13:37:46'),(61,NULL,'dc90853a-cc01-4215-82a5-c58d5c819049','2021-12-23 13:37:56','2021-12-23 13:37:56'),(62,NULL,'c4aafda5-7853-48a7-be34-52c08c95df43','2021-12-23 13:38:01','2021-12-23 13:38:01'),(63,NULL,'754691b5-87bb-45fa-a958-dc7844dbb2ef','2021-12-23 13:38:09','2021-12-23 13:38:09'),(64,NULL,'dd9531e6-7a30-4f5e-8720-d2a014aa64d2','2021-12-23 13:38:58','2021-12-23 13:38:58'),(65,NULL,'2691083d-9bc5-4d5a-9064-43ca26ef05bb','2021-12-23 13:39:08','2021-12-23 13:39:08'),(66,NULL,'4a1bf899-fe8d-4a21-932d-5714ab2b321d','2021-12-23 13:39:39','2021-12-23 13:39:39'),(67,NULL,'6a1e6bfa-d32c-473d-b129-819ff298eb98','2021-12-23 13:39:56','2021-12-23 13:39:56'),(68,NULL,'05e861de-8694-4a04-a165-9e72007f0dfc','2021-12-23 13:40:30','2021-12-23 13:40:30'),(69,NULL,'4908c48d-5c09-42b8-9b12-e006e0c07091','2021-12-23 13:40:35','2021-12-23 13:40:35'),(70,NULL,'9df84d4e-02c3-4c22-8cf5-a6b95c1b9edd','2021-12-23 13:42:41','2021-12-23 13:42:41'),(71,NULL,'4f2846bc-ba8f-497b-8914-31ca63338bc0','2021-12-23 13:43:04','2021-12-23 13:43:04'),(72,NULL,'c5106850-43fb-404e-b194-cf040e33bbb4','2021-12-23 13:43:30','2021-12-23 13:43:30'),(73,NULL,'04c2c5aa-da8c-4046-b9d7-fdbb2e41be10','2021-12-23 13:43:42','2021-12-23 13:43:42'),(74,1,'cb48932e-b333-4205-8b84-e6d1cf84492f','2021-12-24 20:30:34','2021-12-24 20:30:42'),(75,14,'a4de2fdf-1912-4338-a395-1611b16c57c8','2021-12-27 16:50:48','2021-12-27 16:51:04'),(76,NULL,'e378ce63-e7d2-4b40-95aa-c9b2c454cbdf','2021-12-28 15:35:12','2021-12-28 15:35:12'),(77,NULL,'c2caade2-9e8b-42a4-a9c7-4c92a4e503f8','2021-12-31 08:24:14','2021-12-31 08:24:14'),(78,NULL,'1a10fc65-8e8a-4c7e-b369-de18d693b74b','2021-12-31 08:33:39','2021-12-31 08:33:39'),(79,NULL,'7bcf29bf-cba5-4f7e-9083-a34477b8fa26','2021-12-31 08:42:58','2021-12-31 08:42:58'),(80,NULL,'1e92e96c-1b41-40c8-8551-5f112ca5300d','2021-12-31 15:50:47','2021-12-31 15:50:47'),(81,NULL,'61c8f307-7fc7-4a42-82ab-801564c8fa59','2021-12-31 15:50:57','2021-12-31 15:50:57'),(82,NULL,'8198834d-3f77-467f-aa28-c9a5259725fc','2021-12-31 15:52:50','2021-12-31 15:52:50'),(83,NULL,'f6fcd8f2-458e-421f-9cc8-d3df59368f85','2021-12-31 15:55:51','2021-12-31 15:55:51'),(84,NULL,'b5c90097-aca1-480f-aa79-759372c4f6e7','2021-12-31 15:57:34','2021-12-31 15:57:34'),(85,NULL,'b630c76e-16f8-433b-98aa-c75fac36db3a','2021-12-31 15:59:30','2021-12-31 15:59:30'),(86,NULL,'d5c7404b-d137-404f-b77f-af5dc8490e8b','2021-12-31 16:01:15','2021-12-31 16:01:15'),(87,NULL,'912ac01b-eab9-4d20-b20a-56d67ebd4dfa','2021-12-31 16:02:08','2021-12-31 16:02:08'),(88,NULL,'05541a2e-bab5-46c6-9620-9b86f900e8e1','2021-12-31 16:03:26','2021-12-31 16:03:26'),(89,NULL,'1a9d16b8-fbcb-432e-a279-a8e886950cac','2021-12-31 16:07:03','2021-12-31 16:07:03'),(90,NULL,'14bc630a-837f-45bc-a1b8-6e0d9d7cbd16','2021-12-31 16:07:42','2021-12-31 16:07:42'),(91,NULL,'1081ced4-9e6d-4124-998e-568c08d35ca4','2021-12-31 16:08:12','2021-12-31 16:08:12'),(92,NULL,'4f445edf-3274-4ef7-a7c5-60de014a266c','2021-12-31 16:09:26','2021-12-31 16:09:26'),(93,NULL,'19f86084-da7b-47ce-bfd5-712f84c2ef0c','2021-12-31 16:12:22','2021-12-31 16:12:22'),(94,NULL,'aecc6dcd-57c2-4c2f-a08a-0ac17a5de0db','2021-12-31 16:13:58','2021-12-31 16:13:58'),(95,NULL,'39442e85-11f1-49ec-a17e-13526d91a1f5','2021-12-31 16:15:09','2021-12-31 16:15:09'),(96,NULL,'942964c3-9bea-401a-9864-3b6d78bee7fd','2021-12-31 16:15:47','2021-12-31 16:15:47'),(97,NULL,'facfd237-9b54-4221-a28a-e02ece7a17c7','2021-12-31 16:16:37','2021-12-31 16:16:37'),(98,NULL,'0a80c25e-9ce2-41a7-a466-06f9e4a39afa','2021-12-31 16:16:57','2021-12-31 16:16:57'),(99,NULL,'5eeb2732-0417-4257-9c3e-31694be3a065','2021-12-31 16:17:09','2021-12-31 16:17:09'),(100,NULL,'e4b1f595-286f-4042-b2ec-4b456821eda6','2021-12-31 16:17:46','2021-12-31 16:17:46'),(101,NULL,'bd0e5e62-36d7-49ee-8741-a19e3382e9bc','2021-12-31 16:19:36','2021-12-31 16:19:36');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Laptop'),(2,'PC'),(3,'Mouse'),(4,'Console'),(5,'Headphone'),(6,'Keyboard'),(7,'Monitor'),(8,'Gaming Chair');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` VALUES (1,1,1,2),(2,2,1,2),(3,3,1,1),(4,3,3,2);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,NULL,'Đã giao hàng','2021-04-01','2021-04-05'),(2,1,NULL,'Đã giao hàng','2021-03-12','2021-03-15'),(3,3,NULL,'Đã huỷ','2021-07-11','2021-07-15');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,50000,'2021-06-13'),(2,2,250000,'2021-07-24'),(3,3,130000,'2021-07-07');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Alienware M15 R6 P109F001BBL','<b class=\"bigger-text\">LCD:</b> 15.6\" FHD IPS 165Hz\n<br><b class=\"bigger-text\">CPU:</b> i7-11800H <b class=\"bigger-text\">- DDR4</b> 32GB\n<br><b class=\"bigger-text\">VGA:</b> NVIDIA GeForce RTX 3060\n<br><b class=\"bigger-text\">SSD:</b> 1TB\n<br><b class=\"bigger-text\">WIN:</b> 10 Home + Office Home & Student','Alienware M15 R6 được cho là ít tham vọng hơn so với phiên bản tiền nhiệm Ryzen Edition. Ryzen Edition lần đầu tiên đưa silicon AMD lên phần cứng Alienware sau hơn một thập kỷ. Nhưng M15 R6 cũng được trang bị một cấu hình mạnh mẽ và các công nghệ thế mới với intel thế hệ 11 và Nvidia RTX 30 Series.<br>\n<img src=\"/store/img/laptop-dell-1-1.webp\"><br>\n<b>Thiết kế sang trọng, mạnh mẽ và đẳng cấp</b><br>\nAlienware M15 R6 được thiết kế cứng cáp và sở một trọng lượng lý tưởng cho một chiếc Gaming laptop. Nó có trọng lượng tùy vào cấu hình thiết bị. Trọng lượng thấp nhất là 5,34lbs (2,42 kgs) và trọng lượng tối đa: 5,93lbs (2,69 kgs).<br><br>\n<b>Cổng kết nối đầy đủ và đa dạng</b><br>\n<img src=\"/store/img/laptop-dell-1-2.webp\"><br>\n<ul>\n<li>(2) Cổng Type-A USB 3.2 Gen 1 (một cổng có PowerShare)</li>\n<li>Cổng Type-C (Bao gồm các khả năng Thunderbolt 4, USB 3.2 Gen 2, Display Port 1.4 và Power Delivery 15W Output (5V / 3A))</li>\n<li>Cổng Type-A USB 3.2 Gen 1</li>\n<li>Cổng ra HDMI 2.1</li>\n<li>Cổng nguồn / DC-In</li>\n<li>Killer E2600 Cổng Ethernet RJ-45 xếp hạng 1 Gbps</li>\n<li>Giắc cắm tai nghe toàn cầu</li>\n</ul>\n<b>Bàn phím dành riêng cho game thủ</b><br>\nĐối với một chiếc Gaming Laptop thì bàn phím là một trong những yếu tố tạo nên sự khác biệt. Bàn phím Alienware m15 R6 độ nhạy cực cao và có hành trình 1,8mm với công nghệ cuộn N-Key RGB 4 vùng tiêu chuẩn và công nghệ chống bóng mờ. <br><br>\n<img src=\"/store/img/laptop-dell-1-3.webp\"><br>\nĐược trang bị các công tắc thép không gỉ được chế tạo từ Đức, nó được chế tạo với vỏ bọc tiếp xúc điện mạ vàng để đảm bảo rằng tất cả các phím(Trừ những phím chức năng) trên bàn phím đều có cảm giác giống hệt nhau. Ngoài ra, bạn có thể gõ thoải mái với sự đảm bảo không bị lỗi và vòng đời lên đến 15 triệu lần nhấn phím.<br><br>\n<b>Màn hình có tần số quét 165Hz trải nghiệm chơi game mượt mà</b><br>\nVới màn hình có tần số quét 165Hz chúng ta đã  mới có tốc độ cực nhanh và mượt. Nhưng Alienware M15 R6 mới nhất được trang bị màn hình 15.6 inch và có thêm 2 sự lựa chọn về độ phân giải và tần số quét trên màn hình. <br><br>\n<img src=\"/store/img/laptop-dell-1-4.webp\"><br>\nMàn hình 360Hz FHD (1920 x 1080) tùy chọn và màn hình máy tính 240Hz QHD (2560 x 1440). Với 2 màn hình này mang đến trải nghiệm chơi game mượt mà hơn khi ở tốc độ cao. Nó nhờ kết hợp với card đồ họa NVIDIA ® Công nghệ G-SYNC® đồng bộ hóa tốc độ làm mới của màn hình với hiệu suất mà card đồ họa của bạn có thể có (Chỉ khả dụng trên 2 màn hình này).<br><br>\n\nMỗi tùy chọn màn hình m15 R6 bao gồm công nghệ ánh sáng xanh dương thấp ComfortView Plus. Đây là một cách tiếp cận dựa trên phần cứng để lọc ánh sáng xanh mà không làm tổn hại đến chất lượng hình ảnh, được thiết kế để mang lại cho bạn sự tự tin khi chơi game trong nhiều giờ liên tục. <br><br>\n<b>Cấu hình mạnh mẽ chiến mọi tựa game</b><br>\n<img src=\"/store/img/laptop-dell-1-5.webp\"><br>\n<ul>\n<li><b>CPU – THẾ HỆ MỚI:</b> Alienware M15 R6 được trang bị bộ vi xử lý Intel Core i7 11800H thế hệ thứ 11 cho phép hiệu năng đa luồng lên đến 8 lõi và 16 luồng, Alienware m15 R6 mới đã sẵn sàng đưa bạn lên một tầm cao mới về chơi game.</li>\n<li><b>RAM – BỘ NHỚ ĐỆM LỚN:</b> Alienware m15 R6 giới thiệu bộ nhớ DDR4 3200Mhz hoặc 2933Mhz cho máy tính xách tay 15 “, tăng khả năng xử lý siêu tốc của bạn lên một tầm cao mới. Nó thậm chí còn cho phép game thủ nâng cấp bộ nhớ của họ sau khi mua, sử dụng hai khe cắm SO-DIMM có sẵn . </li>\n<li><b>CARD ĐỒ HỌA:</b> Alienware M15 R6  được trang bị card đồ họa NVIDIA ® GeForce RTX ™ 3080 tùy chọn cung cấp hiệu suất cao hơn. Đi kèm với Alienware m15 R6 là các công nghệ Max-Q thế hệ thứ 3 của NVIDIA, bao gồm hỗ trợ. Với NVIDIA ® GeForce RTX ™ 3080 và Dynamic Boost 2.0 được kích hoạt, m15 R6 được đánh giá cho công suất đồ họa tối đa lên đến 125W. </li>\n<li><b>HỆ THỐNG TẢN NHIỆT CAO CẤP:</b> Alienware M15 R6 được thiết kế quạt kép hút không khí mát từ các lỗ thông hơi trên và dướivà đồng thời xả khí ra các lỗ thông hơi bên trái, bên phải và phía sau để làm mát tối ưu các thành phần cốt lõi.</li>\n',2699.99,50,'Dell','laptop-dell-1-1.webp',1,'2019-12-02',2),(3,'Gaming mouse',':3','test \\n test',69.99,0,'Sony','product03.png',2,'2020-04-23',6),(4,'Head phone provip',':3:3','Nón len đen Trắng Nam Nữ Đế Êm Thoáng Khí Hàng Loại 1asdasdasd<br>',1200,300,'MSI','product04.png',5,'2021-12-23',0),(5,'Samsung phone',':3','Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',1500,4,'LG','product05.png',1,'2021-12-23',0),(6,'Phone fake Phone fake',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ thời trang mùa đông êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',1500,4,'MSI','product06.png',2,'2015-12-31',0),(7,'Test fixed',':3','Testtt',200,3,'LG','product03.png',1,'2021-12-23',12),(8,'Test Product Test Product Test Product',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',60,2,'LG','product03.png',2,'2019-05-05',0),(9,'Test Product',':3','I phone hàng xin make in china',477,3,'Dell','product05.png',4,'2018-05-05',0),(10,'Test Product',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',342,5,'MSI','product03.png',1,'2017-02-01',0),(11,'Test Product Test Product Test Product',':3','I phone hàng xin make in china',122,5,'Sony','product05.png',4,'2016-02-02',0),(12,'Test Product',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',126,3,'Dell','product03.png',2,'2019-01-12',0),(13,'Test Product',':3','I phone hàng xin make in china',732,1,'Sony','product05.png',1,'2020-03-03',0),(14,'Test Product',':3','I phone hàng xin make in china',234,2,'Dell','product06.png',2,'2021-12-02',0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_comments`
--

LOCK TABLES `product_comments` WRITE;
/*!40000 ALTER TABLE `product_comments` DISABLE KEYS */;
INSERT INTO `product_comments` VALUES (1,'Admin',5,'asd','2019-11-05',1,1),(2,'User',2,'dsa','2020-01-23',2,1),(4,'ss',5,'sss','2019-11-05',NULL,3),(5,'dd',4,'aweaw','2020-01-23',NULL,3),(6,':3',5,':3','2021-12-02',NULL,1),(7,'User',3,'test review','2021-12-02',2,1),(8,':3',4,':x','2021-12-02',NULL,4),(9,'test',5,'test','2021-12-02',NULL,5),(10,'test 2',1,'test 2','2021-12-02',NULL,5),(11,'test 3',3,'test 3','2021-12-02',NULL,5),(15,'asd',3,'asd','2021-12-02',NULL,6),(16,'dsa',4,'def','2021-12-02',NULL,6),(55,'asd',4,'asd','2021-12-13',NULL,7),(56,'ert',4,'asda','2021-12-13',NULL,1),(61,'12312312',4,'31231231','2021-12-15',NULL,1),(62,'adsad',1,'asdasd','2021-12-15',NULL,4),(63,'test test',4,'12312312','2021-12-15',NULL,1),(64,'31231',5,'31232131','2021-12-15',NULL,1),(65,'test test',3,'adsda','2021-12-16',NULL,3),(66,'test 2',5,'31231','2021-12-16',NULL,3),(67,'ad2a2',5,'312','2021-12-16',NULL,3),(68,'ad231',1,'231312','2021-12-16',NULL,3);
/*!40000 ALTER TABLE `product_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,1,'laptop-dell-1-1.webp'),(2,1,'laptop-dell-1-2.webp'),(3,1,'laptop-dell-1-3.webp'),(4,1,'laptop-dell-1-4.webp'),(5,1,'laptop-dell-1-5.webp'),(9,3,'product03.png'),(10,3,'product04.png'),(11,3,'product04.png'),(12,4,'product04.png'),(13,4,'product05.png'),(14,4,'product05.png'),(15,5,'product05.png'),(16,5,'product06.png'),(17,5,'product06.png'),(18,6,'product06.png'),(19,6,'laptop-dell-1-4.webp'),(20,6,'laptop-dell-1-5.webp');
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

-- Dump completed on 2021-12-31 23:29:33
