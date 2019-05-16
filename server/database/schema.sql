-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'hotels'
-- 
-- ---

DROP TABLE IF EXISTS `hotels`;
		
CREATE TABLE `hotels` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(250) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'hotels_pictures'
-- 
-- ---

DROP TABLE IF EXISTS `hotels_pictures`;
		
CREATE TABLE `hotels_pictures` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_hotels` INTEGER NOT NULL DEFAULT NULL,
  `id_pictures` INTEGER(60) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'pictures'
-- 
-- ---

DROP TABLE IF EXISTS `pictures`;
		
CREATE TABLE `pictures` (
  `id` INTEGER(60) NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(60) NOT NULL,
  `id_categories` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'categories'
-- 
-- ---

DROP TABLE IF EXISTS `categories`;
		
CREATE TABLE `categories` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `category` VARCHAR NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `hotels_pictures` ADD FOREIGN KEY (id_hotels) REFERENCES `hotels` (`id`);
ALTER TABLE `hotels_pictures` ADD FOREIGN KEY (id_pictures) REFERENCES `pictures` (`id`);
ALTER TABLE `pictures` ADD FOREIGN KEY (id_categories) REFERENCES `categories` (`id`);

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