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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(255) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comment` (`comment_id`, `comment_date`, `content`, `user_id`, `image_id`) VALUES
(1, '2024-09-01 10:15:00', 'Beautiful colors in this sunset!', 1, 1);
INSERT INTO `comment` (`comment_id`, `comment_date`, `content`, `user_id`, `image_id`) VALUES
(2, '2024-09-01 11:30:00', 'I wish I could climb that mountain.', 2, 2);
INSERT INTO `comment` (`comment_id`, `comment_date`, `content`, `user_id`, `image_id`) VALUES
(3, '2024-09-02 09:45:00', 'What a cute kitty!', 1, 3);
INSERT INTO `comment` (`comment_id`, `comment_date`, `content`, `user_id`, `image_id`) VALUES
(4, '2024-09-02 14:20:00', 'The city lights are mesmerizing.', 2, 4),
(5, '2024-09-03 16:00:00', 'This rose looks so delicate.', 1, 5),
(6, '2024-09-03 18:30:00', 'I love the reflection on the water.', 2, 1),
(7, '2024-09-04 08:00:00', 'The snow looks pristine!', 1, 2),
(8, '2024-09-04 12:45:00', 'That cat looks just like mine!', 2, 3),
(9, '2024-09-05 20:10:00', 'Which city is this? It\'s gorgeous!', 1, 4),
(10, '2024-09-05 22:30:00', 'The detail in this photo is amazing.', 2, 5),
(11, '2024-09-03 14:00:41', 'Test comment', 1, 1),
(12, '2024-09-04 14:24:22', 'Test comment 2', 1, 2),
(13, '2024-09-04 15:20:28', 'Test comment 2', 1, 5);

INSERT INTO `image` (`image_id`, `image_name`, `path`, `description`, `user_id`) VALUES
(1, 'sunset', '/uploads/sunset.jpg', 'Beautiful sunset over the ocean', 1);
INSERT INTO `image` (`image_id`, `image_name`, `path`, `description`, `user_id`) VALUES
(2, 'mountain', '/uploads/mountain.png', 'Snow-capped mountain peak', 2);
INSERT INTO `image` (`image_id`, `image_name`, `path`, `description`, `user_id`) VALUES
(3, 'cat', '/uploads/cat.jpg', 'Cute tabby cat playing with yarn', 1);
INSERT INTO `image` (`image_id`, `image_name`, `path`, `description`, `user_id`) VALUES
(4, 'cityscape', '/uploads/cityscape.jpg', 'Urban skyline at night', 2),
(5, 'flower', '/uploads/flower.png', 'Close-up of a red rose', 1),
(7, 'flower 002', '/uploads/flower-002.png', 'Close-up of a rose', 1),
(9, 'flower 45', '/uploads/flower-45.png', 'Close-up of a rose', 1),
(10, 'flower 4', '/uploads/flower-45.png', 'Close-up of a rose', 1),
(11, 'flower 4', '/uploads/flower-45.png', 'Close-up of a rose', 1);

INSERT INTO `saved_image` (`saved_image_id`, `user_id`, `image_id`, `save_date`) VALUES
(1, 1, 1, '2024-09-01 10:15:00');
INSERT INTO `saved_image` (`saved_image_id`, `user_id`, `image_id`, `save_date`) VALUES
(2, 2, 2, '2024-09-01 11:30:00');
INSERT INTO `saved_image` (`saved_image_id`, `user_id`, `image_id`, `save_date`) VALUES
(3, 1, 3, '2024-09-02 09:45:00');
INSERT INTO `saved_image` (`saved_image_id`, `user_id`, `image_id`, `save_date`) VALUES
(4, 2, 4, '2024-09-02 14:20:00'),
(5, 1, 5, '2024-09-03 16:00:00'),
(6, 2, 1, '2024-09-03 18:30:00'),
(7, 1, 2, '2024-09-04 08:00:00'),
(8, 1, 4, '2024-09-05 20:10:00');

INSERT INTO `user` (`user_id`, `email`, `full_name`, `age`, `avatar`, `password`, `refresh_token`, `role`) VALUES
(1, 'khang02@gmail.com', 'Nguyễn Khang', 23, '/image/my-avatar.png', '$2b$10$qI9OrpmdUP2j/fD4TvD5IutReCwRBgd3xDRd7ITvaRBKkOnkg/2Ue', NULL, 'USER');
INSERT INTO `user` (`user_id`, `email`, `full_name`, `age`, `avatar`, `password`, `refresh_token`, `role`) VALUES
(2, 'user1@gmail.com', 'user 01', 30, NULL, '$2b$10$cA7To31dPorF9oLImfDRe.u0PjK6QP/wzT4tgZA1Lla58TCA3Lt6K', '', 'USER');
INSERT INTO `user` (`user_id`, `email`, `full_name`, `age`, `avatar`, `password`, `refresh_token`, `role`) VALUES
(3, 'user02@gmail.com', 'user 02', 30, NULL, '$2b$10$yqKqKDBAYuWfsjoaxIT3C.RCRJjCK/4o0HET9mgtZN4P9i5Z8h3fO', '', 'USER');
INSERT INTO `user` (`user_id`, `email`, `full_name`, `age`, `avatar`, `password`, `refresh_token`, `role`) VALUES
(4, 'user03@gmail.com', 'user 03', NULL, NULL, '$2b$10$WvuADlc7NKnAYaEn/QrF1e1.Nt8mqa9LaWhczMkDZrKCi6Ien0Uzu', '', 'USER');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;