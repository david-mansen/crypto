CREATE DATABASE `market`;
USE DATABASE `market`;
CREATE TABLE `market`.`users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `userWallet` INT NULL,
  PRIMARY KEY (`idUsers`));
CREATE TABLE `market`.`bets` (
  `betId` INT NOT NULL AUTO_INCREMENT,
  `betTime` DATETIME NULL,
  `betUser` INT NULL,
  `betAmount` INT NULL,
  `betWinCase` VARCHAR(45) NULL,
  `betLossCase` VARCHAR(45) NULL,
  PRIMARY KEY (`betId`));
CREATE TABLE `market`.`transactions` (
  `transId` INT NOT NULL AUTO_INCREMENT,
  `transUser` INT NULL,
  `transResult` VARCHAR(45) NULL,
  `transDate` DATETIME NULL,
  PRIMARY KEY (`transId`));
