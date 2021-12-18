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
INSERT INTO `account` VALUES (1,'admin@gmail.com','$2b$10$o4NjgTqghOx5C8GsCogOmO4dbdz5h/XPAXNjVYEaqKnrvQjX.c12y','Admin','23 Mercer Street',135868534,1,'2019-06-17 17:00:00','2021-12-16 17:52:44',0,NULL,NULL),(2,'user@gmail.com','$2b$10$MIgWeeZH.L6weslq86MvLu/5s5a0.hHiyeRXlJmJAal011gRZzaxO','User','312321',123123,0,'2019-06-17 17:00:00','2019-06-17 17:00:00',0,NULL,NULL),(3,'123@gmail.com','$2b$10$9sW4Tmag5hNhavFurfreD.P24i6YWo2SmOmqj3seQpps07s/r3dPe','Test','123',123123123,0,'2021-12-02 10:30:27','2021-12-16 17:52:27',0,NULL,NULL),(4,'test@gmail.com','$2b$10$NDxLD7m4La9a7gspaOw1.eEivTixZ2/k5bskA7KWZ08x9Kg/X4wUq','123','123',123,0,'2021-12-02 10:31:55','2021-12-02 10:31:55',1,NULL,NULL),(5,'admin2@gmail.com','$2b$10$2HO386RnAXoKZB0uj1w.lemq4SaU0SvKv/DaIQxU1z2GHNJgQAZbO','Admin2','25 Mercer Street',23531233,1,'2021-12-02 10:30:27','2021-12-02 10:30:27',0,NULL,NULL),(8,'admin3@gmail.com','$2b$10$BhIf5vThVrtG0maqNVwUXOTi5nUEW3cjopSpTPovCgcq4QFZU0dBm','Admin3','232323',312987,1,'2021-12-02 12:59:07','2021-12-02 12:59:07',0,NULL,NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
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
INSERT INTO `category` VALUES (1,'Laptop'),(2,'Phone'),(3,'Mouse'),(4,'Gaming devices'),(5,'Head phone');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
INSERT INTO `orderdetail` VALUES (1,1,4,1,1),(1,3,6,3,1),(2,3,7,3,2),(2,5,21,5,2),(2,6,11,6,2),(3,4,6,4,3),(3,6,7,6,3),(4,3,5,3,4),(5,3,1,3,5),(6,3,10,3,6);
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
INSERT INTO `product` VALUES (1,'Alienware M15 R6 P109F001BBL','<b class=\"bigger-text\">LCD:</b> 15.6\" FHD IPS 165Hz\n<br><b class=\"bigger-text\">CPU:</b> i7-11800H <b class=\"bigger-text\">- DDR4</b> 32GB\n<br><b class=\"bigger-text\">VGA:</b> NVIDIA GeForce RTX 3060\n<br><b class=\"bigger-text\">SSD:</b> 1TB\n<br><b class=\"bigger-text\">WIN:</b> 10 Home + Office Home & Student','Alienware M15 R6 được cho là ít tham vọng hơn so với phiên bản tiền nhiệm Ryzen Edition. Ryzen Edition lần đầu tiên đưa silicon AMD lên phần cứng Alienware sau hơn một thập kỷ. Nhưng M15 R6 cũng được trang bị một cấu hình mạnh mẽ và các công nghệ thế mới với intel thế hệ 11 và Nvidia RTX 30 Series.<br>\n<img src=\"/store/img/laptop-dell-1-1.webp\"><br>\n<b>Thiết kế sang trọng, mạnh mẽ và đẳng cấp</b><br>\nAlienware M15 R6 được thiết kế cứng cáp và sở một trọng lượng lý tưởng cho một chiếc Gaming laptop. Nó có trọng lượng tùy vào cấu hình thiết bị. Trọng lượng thấp nhất là 5,34lbs (2,42 kgs) và trọng lượng tối đa: 5,93lbs (2,69 kgs).<br><br>\n<b>Cổng kết nối đầy đủ và đa dạng</b><br>\n<img src=\"/store/img/laptop-dell-1-2.webp\"><br>\n<ul>\n<li>(2) Cổng Type-A USB 3.2 Gen 1 (một cổng có PowerShare)</li>\n<li>Cổng Type-C (Bao gồm các khả năng Thunderbolt 4, USB 3.2 Gen 2, Display Port 1.4 và Power Delivery 15W Output (5V / 3A))</li>\n<li>Cổng Type-A USB 3.2 Gen 1</li>\n<li>Cổng ra HDMI 2.1</li>\n<li>Cổng nguồn / DC-In</li>\n<li>Killer E2600 Cổng Ethernet RJ-45 xếp hạng 1 Gbps</li>\n<li>Giắc cắm tai nghe toàn cầu</li>\n</ul>\n<b>Bàn phím dành riêng cho game thủ</b><br>\nĐối với một chiếc Gaming Laptop thì bàn phím là một trong những yếu tố tạo nên sự khác biệt. Bàn phím Alienware m15 R6 độ nhạy cực cao và có hành trình 1,8mm với công nghệ cuộn N-Key RGB 4 vùng tiêu chuẩn và công nghệ chống bóng mờ. <br><br>\n<img src=\"/store/img/laptop-dell-1-3.webp\"><br>\nĐược trang bị các công tắc thép không gỉ được chế tạo từ Đức, nó được chế tạo với vỏ bọc tiếp xúc điện mạ vàng để đảm bảo rằng tất cả các phím(Trừ những phím chức năng) trên bàn phím đều có cảm giác giống hệt nhau. Ngoài ra, bạn có thể gõ thoải mái với sự đảm bảo không bị lỗi và vòng đời lên đến 15 triệu lần nhấn phím.<br><br>\n<b>Màn hình có tần số quét 165Hz trải nghiệm chơi game mượt mà</b><br>\nVới màn hình có tần số quét 165Hz chúng ta đã  mới có tốc độ cực nhanh và mượt. Nhưng Alienware M15 R6 mới nhất được trang bị màn hình 15.6 inch và có thêm 2 sự lựa chọn về độ phân giải và tần số quét trên màn hình. <br><br>\n<img src=\"/store/img/laptop-dell-1-4.webp\"><br>\nMàn hình 360Hz FHD (1920 x 1080) tùy chọn và màn hình máy tính 240Hz QHD (2560 x 1440). Với 2 màn hình này mang đến trải nghiệm chơi game mượt mà hơn khi ở tốc độ cao. Nó nhờ kết hợp với card đồ họa NVIDIA ® Công nghệ G-SYNC® đồng bộ hóa tốc độ làm mới của màn hình với hiệu suất mà card đồ họa của bạn có thể có (Chỉ khả dụng trên 2 màn hình này).<br><br>\n\nMỗi tùy chọn màn hình m15 R6 bao gồm công nghệ ánh sáng xanh dương thấp ComfortView Plus. Đây là một cách tiếp cận dựa trên phần cứng để lọc ánh sáng xanh mà không làm tổn hại đến chất lượng hình ảnh, được thiết kế để mang lại cho bạn sự tự tin khi chơi game trong nhiều giờ liên tục. <br><br>\n<b>Cấu hình mạnh mẽ chiến mọi tựa game</b><br>\n<img src=\"/store/img/laptop-dell-1-5.webp\"><br>\n<ul>\n<li><b>CPU – THẾ HỆ MỚI:</b> Alienware M15 R6 được trang bị bộ vi xử lý Intel Core i7 11800H thế hệ thứ 11 cho phép hiệu năng đa luồng lên đến 8 lõi và 16 luồng, Alienware m15 R6 mới đã sẵn sàng đưa bạn lên một tầm cao mới về chơi game.</li>\n<li><b>RAM – BỘ NHỚ ĐỆM LỚN:</b> Alienware m15 R6 giới thiệu bộ nhớ DDR4 3200Mhz hoặc 2933Mhz cho máy tính xách tay 15 “, tăng khả năng xử lý siêu tốc của bạn lên một tầm cao mới. Nó thậm chí còn cho phép game thủ nâng cấp bộ nhớ của họ sau khi mua, sử dụng hai khe cắm SO-DIMM có sẵn . </li>\n<li><b>CARD ĐỒ HỌA:</b> Alienware M15 R6  được trang bị card đồ họa NVIDIA ® GeForce RTX ™ 3080 tùy chọn cung cấp hiệu suất cao hơn. Đi kèm với Alienware m15 R6 là các công nghệ Max-Q thế hệ thứ 3 của NVIDIA, bao gồm hỗ trợ. Với NVIDIA ® GeForce RTX ™ 3080 và Dynamic Boost 2.0 được kích hoạt, m15 R6 được đánh giá cho công suất đồ họa tối đa lên đến 125W. </li>\n<li><b>HỆ THỐNG TẢN NHIỆT CAO CẤP:</b> Alienware M15 R6 được thiết kế quạt kép hút không khí mát từ các lỗ thông hơi trên và dướivà đồng thời xả khí ra các lỗ thông hơi bên trái, bên phải và phía sau để làm mát tối ưu các thành phần cốt lõi.</li>\n',2699.99,50,'Dell','laptop-dell-1-1.webp',1,'2019-12-02'),(3,'Gaming mouse',':3','test \\n test',69.99,0,'Sony','product03.png',3,'2020-04-23'),(4,'Head phone provip Head phone provip',':3:3','[Mã FATHANG5 giảm 10K đơn 50K] Nón len đen Trắng Nam Nữ Đế Êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',1200,300,'MSI','product04.png',1,'2021-12-02'),(5,'Samsung phone',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',1500,4,'LG','product05.png',1,'2021-06-12'),(6,'Phone fake Phone fake',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ thời trang mùa đông êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',1500,4,'MSI','product06.png',3,'2015-12-31'),(7,'Test',':3','Testtt',200,3,'LG','product03.png',4,'2018-03-25'),(8,'Test Product Test Product Test Product',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',60,2,'LG','product03.png',3,'2019-05-05'),(9,'Test Product',':3','I phone hàng xin make in china',477,3,'Dell','product05.png',2,'2018-05-05'),(10,'Test Product',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',342,5,'MSI','product03.png',1,'2017-02-01'),(11,'Test Product Test Product Test Product',':3','I phone hàng xin make in china',122,5,'Sony','product05.png',3,'2016-02-02'),(12,'Test Product',':3','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',126,3,'Dell','product03.png',2,'2019-01-12'),(13,'Test Product',':3','I phone hàng xin make in china',732,1,'Sony','product05.png',1,'2020-03-03'),(14,'Test Product',':3','I phone hàng xin make in china',234,2,'Dell','product06.png',5,'2021-12-02'),(81,'Test Product','123','123<br>',123,123,'Logitech','product07.png',1,'2021-11-29'),(83,'Test Filter','1231','31232<br>',212,121,'MSI','Untitled.png',1,'2021-12-15');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_comments`
--

LOCK TABLES `product_comments` WRITE;
/*!40000 ALTER TABLE `product_comments` DISABLE KEYS */;
INSERT INTO `product_comments` VALUES (1,'Admin',5,'asd','2019-11-05',1,1),(2,'User',2,'dsa','2020-01-23',2,1),(4,'ss',5,'sss','2019-11-05',NULL,3),(5,'dd',4,'aweaw','2020-01-23',NULL,3),(6,':3',5,':3','2021-12-02',NULL,1),(7,'User',3,'test review','2021-12-02',2,1),(8,':3',4,':x','2021-12-02',NULL,4),(9,'test',5,'test','2021-12-02',NULL,5),(10,'test 2',1,'test 2','2021-12-02',NULL,5),(11,'test 3',3,'test 3','2021-12-02',NULL,5),(15,'asd',3,'asd','2021-12-02',NULL,6),(16,'dsa',4,'def','2021-12-02',NULL,6),(55,'asd',4,'asd','2021-12-13',NULL,7),(56,'ert',4,'asda','2021-12-13',NULL,1),(57,'Admin',4,'dasdad','2021-12-15',1,83),(58,'Admin',5,'meow meow','2021-12-15',1,83),(59,'Admin',4,'31231','2021-12-15',1,83),(60,'dasda',3,'asdasd','2021-12-15',NULL,83),(61,'12312312',4,'31231231','2021-12-15',NULL,1),(62,'adsad',1,'asdasd','2021-12-15',NULL,4),(63,'test test',4,'12312312','2021-12-15',NULL,1),(64,'31231',5,'31232131','2021-12-15',NULL,1),(65,'test test',3,'adsda','2021-12-16',NULL,3),(66,'test 2',5,'31231','2021-12-16',NULL,3),(67,'ad2a2',5,'312','2021-12-16',NULL,3),(68,'ad231',1,'231312','2021-12-16',NULL,3);
/*!40000 ALTER TABLE `product_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,1,'laptop-dell-1-1.webp'),(2,1,'laptop-dell-1-2.webp'),(3,1,'laptop-dell-1-3.webp'),(4,1,'laptop-dell-1-4.webp'),(5,1,'laptop-dell-1-5.webp'),(9,3,'product03.png'),(10,3,'product04.png'),(11,3,'product04.png'),(12,4,'product04.png'),(13,4,'product05.png'),(14,4,'product05.png'),(15,5,'product05.png'),(16,5,'product06.png'),(17,5,'product06.png'),(18,6,'product06.png'),(19,6,'laptop-dell-1-4.webp'),(20,6,'laptop-dell-1-5.webp'),(57,81,'product07.png'),(58,81,'product08.png'),(59,81,'product09.png'),(60,83,'Untitled.png');
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

-- Dump completed on 2021-12-18 21:14:34
