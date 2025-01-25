/*
  Warnings:

  - You are about to alter the column `customerName` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `place` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `country` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `price` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Double`.
  - You are about to alter the column `rating` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Double`.
  - Made the column `visaNumber` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `customerName` VARCHAR(191) NOT NULL,
    MODIFY `visaNumber` VARCHAR(191) NOT NULL,
    MODIFY `place` VARCHAR(191) NOT NULL,
    MODIFY `country` VARCHAR(191) NOT NULL,
    MODIFY `price` DOUBLE NOT NULL,
    MODIFY `rating` DOUBLE NOT NULL;
