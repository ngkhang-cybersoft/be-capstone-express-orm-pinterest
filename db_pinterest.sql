/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `comment_date` datetime NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(255) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `saved_image` (
  `saved_image_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `image_id` int NOT NULL,
  `save_date` datetime NOT NULL,
  PRIMARY KEY (`saved_image_id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `saved_image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `saved_image_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `age` int DEFAULT NULL,
  `avatar` text,
  `password` varchar(255) NOT NULL,
  `refresh_token` text,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comment` (`comment_id`, `comment_date`, `content`, `user_id`, `image_id`) VALUES
(1, '2024-09-06 15:20:38', 'So funny', 1, 1);
INSERT INTO `comment` (`comment_id`, `comment_date`, `content`, `user_id`, `image_id`) VALUES
(2, '2024-09-06 15:20:45', 'cute', 1, 1);


INSERT INTO `image` (`image_id`, `image_name`, `path`, `description`, `user_id`) VALUES
(1, 'meme dog', '/files/1725635871916_test.jpg', 'Meme dog', 1);
INSERT INTO `image` (`image_id`, `image_name`, `path`, `description`, `user_id`) VALUES
(2, 'meme 2 dog', '/files/1725635880818_test.jpg', 'Meme 2 dog', 1);


INSERT INTO `saved_image` (`saved_image_id`, `user_id`, `image_id`, `save_date`) VALUES
(1, 1, 1, '2024-09-06 15:22:08');
INSERT INTO `saved_image` (`saved_image_id`, `user_id`, `image_id`, `save_date`) VALUES
(2, 1, 2, '2024-09-06 15:23:18');


INSERT INTO `user` (`user_id`, `email`, `full_name`, `age`, `avatar`, `password`, `refresh_token`, `role`) VALUES
(1, 'khang02@gmail.com', 'Nguyễn Khang', 23, '/avatars/1725635992637_test.jpg', '$2b$10$45huKcluBABi9pez8/EBH.vsS55YkJJxry.rvLIjEjrSdGyUVuMFa', '', 'USER');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;