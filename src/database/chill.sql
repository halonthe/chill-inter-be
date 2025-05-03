--
-- Database: `chill`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE
  `users` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `avatar_path` varchar(255) DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `avatar_path`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin123', 'https://media.server/deafult_avatar.png', '2025-05-03 09:03:12', '2025-05-03 09:04:09', ''),
(2, 'member', 'member@gmail.com', 'member123', 'https://media.server/deafult_avatar.png', '2025-05-03 09:03:12', '2025-05-03 09:04:09', ''),
(3, 'halonthe', 'halonthe@gmail.com', 'kontolsingo', 'https://media.server/deafult_avatar.png', '2025-05-03 09:03:12', '2025-05-03 09:04:09', '2025-05-04 10:04:09')