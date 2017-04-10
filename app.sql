/*
Navicat MySQL Data Transfer

Source Server         : 本地mySQL
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : app

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-09 21:01:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `price` varchar(60) NOT NULL,
  `imgurl` varchar(30) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  `description` varchar(50) NOT NULL,
  `color` varchar(30) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 't-shirt-1', '69', 't1.jpg', 'aa', 'aa', 'red', 'm', null);
INSERT INTO `goods` VALUES ('2', 't-shirt-2', '79', 't2.jpg', 'bb', 'bb', 'yellow', 'l', null);
INSERT INTO `goods` VALUES ('3', 't-shirt-3', '33', 't3.jpg', 'ff', 'ff', 'black', 's', null);
INSERT INTO `goods` VALUES ('4', 't-shirt-4', '43', 't4.jpg', 'a', 'sa', null, 'l', null);
INSERT INTO `goods` VALUES ('5', 't-shirt-5', '546', 't5.jpg', 'r', 'wer', null, 's', null);
INSERT INTO `goods` VALUES ('6', 't-shirt-6', '324', 't6.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('7', 't-shirt-7', '324', 't7.jpg', 'r', 'er', null, 'xl', null);
INSERT INTO `goods` VALUES ('8', 't-shirt-8', '3232', 't8.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('9', 't-shirt-9', '989', 't9.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('10', 't-shirt-10', '98', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('11', 't-shirt-11', '102', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('12', 't-shirt-12', '91', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('13', 't-shirt-13', '98', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('14', 't-shirt-14', '65', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('15', 't-shirt-15', '98', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('16', 't-shirt-16', '199', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('17', 't-shirt-17', '199', 't2.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('18', 't-shirt-18', '199', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('19', 't-shirt-19', '199', 't3.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('20', 't-shirt-20', '199', 't4.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('21', 't-shirt-21', '199', 't4.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('22', 't-shirt-22', '199', 't6.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('23', 't-shirt-23', '1993', 't1.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('24', 't-shirt-24', '142', 't4.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('25', 't-shirt-25', '199', 't8.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('26', 't-shirt-26', '43', 't7.jpg', 'r', 'er', null, 'm', null);
INSERT INTO `goods` VALUES ('27', 't-shirt-27', '199', 't4.jpg', 'r', 'er', null, 'xl', null);
INSERT INTO `goods` VALUES ('28', 't-shirt-28', '199', 't9.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('29', 't-shirt-29', '78', 't4.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('30', 't-shirt-30', '199', 't4.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('31', 't-shirt-31', '18', 't2.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('32', 't-shirt-32', '181', 't6.jpg', 'r', 'er', null, 'xxl', null);
INSERT INTO `goods` VALUES ('33', 't-shirt-33', '18', 't2.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('34', 't-shirt-34', '77', 't7.jpg', 'r', 'er', null, 'm', null);
INSERT INTO `goods` VALUES ('35', 't-shirt-35', '45', 't2.jpg', 'r', 'er', null, 's', null);
INSERT INTO `goods` VALUES ('36', 't-shirt-36', '18', 't8.jpg', 'r', 'er', null, 'xxxl', null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'chimin', 'chimin', null);
INSERT INTO `user` VALUES ('2', '21', '123456', null);
INSERT INTO `user` VALUES ('3', 'xiaoming', '666666', null);
INSERT INTO `user` VALUES ('4', 'daming', '654321', null);
INSERT INTO `user` VALUES ('5', 'ph', '0000000', null);
INSERT INTO `user` VALUES ('6', 'jack', '123456', null);
INSERT INTO `user` VALUES ('7', 'xiaohong', '123456', null);
INSERT INTO `user` VALUES ('8', '0752', '123456', null);
INSERT INTO `user` VALUES ('9', 'ck', '123456', null);
INSERT INTO `user` VALUES ('10', 'pla', '1234567', null);
INSERT INTO `user` VALUES ('11', '009', 'zhiming', null);
SET FOREIGN_KEY_CHECKS=1;
