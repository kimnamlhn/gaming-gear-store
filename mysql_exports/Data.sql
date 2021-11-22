CREATE DATABASE  IF NOT EXISTS `mydb`
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.27

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
INSERT INTO `account` VALUES (1,'admin@gmail.com','123456',1358685356,_binary '1'),(2,'tvtinh@gmail.com','$2y$10$JRAxIxXqzh9tMxyhKuser',1369985356,_binary '1'),(3,'nhao@gmail.com','$2y$10$9gQ28K.ilrIoj66bu8aAXOqPz1OUz5Ov',136415356,_binary '1'),(4,'tvchinh@gmail.com','$2y$10$9gQ28K.ilrIoj66bu8aAXOqPz1OUz5Ov',136255356,_binary '1'),(5,'nvvui@gmail.com','$2y$10$JRAxIxXqzh9tMxyhK.oW0eOnY0',1369582356,_binary '1'),(6,'ntanh@gmail.com','$2y$10$9gQ28K',1369985356,_binary '1'),(7,'nvluong@gmail.com','$2y$10$JRAxIxXu',136285356,_binary '1'),(8,'hthe@gmail.com','$2y$10$9gQ28K.i',1369985356,_binary '1'),(9,'tvnam@gmail.com','$2y$10$JRAxIxXqzh9tMxyhK.oWeh8sZDW1NwHku',165985356,_binary '1'),(10,'tpvan@gmail.com','$2y$10$9gQ28K.ilrIoj66bcjXCbbYEi7bKq0q',1368565356,_binary '1'),(11,'lhuynh@gmail.com','$2y$10$JRAxIxXqzdeh8sZDW1NwHku',1358685356,_binary '1');
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
INSERT INTO `category` VALUES (1,'Laptop'),(2,'Phone'),(3,'Mouse'),(4,'Gaming devices'),(5,'Head phone');
UNLOCK TABLES;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
INSERT INTO `orderdetail` VALUES (1,1,4,1,1),(1,2,5,2,1),(1,3,6,3,1),(2,3,7,3,2),(2,5,21,5,2),(2,6,11,6,2),(3,4,6,4,3),(3,6,7,6,3),(4,3,5,3,4),(5,3,1,3,5),(6,3,10,3,6);
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
INSERT INTO `orders` VALUES (1,'2021-04-01','2021-04-05','Đã giao hàng',1,1,1),(2,'2021-03-12','2021-03-15','Đã giao hàng',1,2,1),(3,'2021-07-11','2021-07-15','Đã huỷ',3,3,3),(4,'2021-06-05','2021-06-09','Đã giao hàng',2,3,2),(5,'2021-03-07','2021-03-10','Đã giao hàng',2,4,2),(6,'2021-04-03','2021-04-07','Đã huỷ',3,5,3),(7,'2021-06-21','2021-06-25','Đã huỷ',4,6,4),(8,'2021-06-23','2021-06-25','Đã giao hàng',2,7,2);
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
INSERT INTO `payment` VALUES (1,1,'2021-06-13',50000,1,1),(2,2,'2021-07-24',250000,2,2),(3,3,'2021-07-07',130000,2,1),(4,2,'2021-05-08',120000,3,2),(5,1,'2021-04-12',50000,4,3),(6,3,'2021-05-21',750000,1,3),(7,4,'2021-06-05',120000,2,4),(8,5,'2021-07-15',100000,1,5);
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
INSERT INTO `product` VALUES (1,'Latop Gaming Dell','    <div>\n        <div>\n            <h4> Latop DELL </h4>\n            <ul>\n                <li> Best product for gaming\n                </li>\n                <li> Cam kết 100% sản phẩm Y HÌNH (hình do shop tự chụp). Tuy nhiên màu sắc có chênh lệch chút ít do ánh\n                    sáng.\n                </li>\n                <li> Anh/chị em chọn mẫu rồi chọn đúng size, MUA 2 ĐÔI KHÁC SIZE thì vui lòng cho từng size THÊM VÀO GIỎ\n                    HÀNG rồi vào giỏ hàng chọn MUA NGAY.\n                </li>\n            </ul>\n        </div>\n        <div>\n            <h4>\n                Mô Tả Sản Phẩm:\n            </h4>\n            <ul>\n                <li>\n                    Giày được làm bằng 100% chất liệu da thật, mềm và mịn.\n                </li>\n                <li>\n                    Phần đế bằng cao su đúc nguyên khối rất chắc chắn và bền.\n                </li>\n            </ul>\n        </div>\n    </div>',50000,20,'SAMSUNG','/user/img/product01.png',1),(2,'Iphone 15 promax','I phone hàng xin make in china\n- Len dệt chuẩn dày với độ co dãn tốt\n- Form phù hợp với mọi lứa tuổi',30000,10,'LG','/user/img/product02.png',2),(3,'Gaming mouse','Tee Basic Slyder Ss1 - Áo Thun Tay Lỡ Streetwear\nChất liệu : \n- Cotton 100% chính phẩm, bo cổ dày dặn\n- Nhãn mạc cấu tạo Local Brand Slyder\nKích Thước :\n- S : Dài 71 Ngang 56 ( Cao dưới 1M64 Nặng dưới 65kg )\n- M : Dài 74 Ngang 58 ( Cao 1M62 > 1M72 - Nặng dưới 90kg )\n- L : Dài 77 Ngang 60 ( Cao Trên 1M72 > 1M90 - Nặng dưới 120kg )',100000,0,'SONY','/user/img/product03.png',3),(4,'Head phone provip','[Mã FATHANG5 giảm 10K đơn 50K] Nón len đen Trắng Nam Nữ Đế Êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',120000,300,'MSI','/user/img/product04.png',4),(5,'Samsung phone','[Mã FATHANG5 giảm 10K đơn 50K] Mũ lưỡi trai êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',150000,4,'LG','/user/img/product05.png',1),(6,'Phone fake','[Mã FATHANG5 giảm 10K đơn 50K] Mũ thời trang mùa đông êm Thoáng Khí Hàng Loại 1 ( Freeship+ Full box + Quà tặng)',150000,4,'MSI','/user/img/product06.png',3);
UNLOCK TABLES;

-- Dump completed on 2021-11-23  1:37:24
