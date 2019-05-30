-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;



-- ---
-- Table 'categories'
-- 
-- ---

DROP TABLE IF EXISTS `categories`;
		
CREATE TABLE `categories` (
  `id` INTEGER NULL DEFAULT NULL,
  `category` VARCHAR NOT NULL,
  PRIMARY KEY (`id`)
);



-- ---
-- Table 'hotels'
-- 
-- ---

DROP TABLE IF EXISTS `hotels`;
		
CREATE TABLE `hotels` (
  `id` INTEGER NOT NULL,
  `name` VARCHAR(250) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);



-- ---
-- Table 'pictures'
-- 
-- ---

DROP TABLE IF EXISTS `pictures`;
		
CREATE TABLE `pictures` (
  `id` INTEGER NOT NULL,
  `url` VARCHAR(60) NOT NULL,
  `id_category` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`)
);




-- ---
-- Table 'hotels_pictures'
-- 
-- ---

DROP TABLE IF EXISTS `hotels_pictures`;
		
CREATE TABLE `hotels_pictures` (
  `id` INTEGER NULL,
  `id_hotels` INTEGER NOT NULL DEFAULT NULL,
  `id_pictures` INTEGER(60) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_hotels`) REFERENCES `hotels` (`id`),
  FOREIGN KEY (`id_pictures`) REFERENCES `pictures` (`id`),
  UNIQUE (`id_hotels`, `id_pictures`)
);




-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `hotels_pictures` ADD FOREIGN KEY (id_hotels) REFERENCES `hotels` (`id`);
-- ALTER TABLE `hotels_pictures` ADD FOREIGN KEY (id_pictures) REFERENCES `pictures` (`id`);
-- ALTER TABLE `pictures` ADD FOREIGN KEY (id_categories) REFERENCES `categories` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `hotels` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `hotels_pictures` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `pictures` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `categories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `hotels` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `hotels_pictures` (`id`,`id_hotels`,`id_pictures`) VALUES
-- ('','','');
-- INSERT INTO `pictures` (`id`,`url`,`id_categories`) VALUES
-- ('','','');
-- INSERT INTO `categories` (`id`,`category`) VALUES
-- ('','');