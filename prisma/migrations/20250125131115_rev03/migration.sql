/*
  Warnings:

  - You are about to drop the column `visaNumber` on the `pesan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pesan` DROP COLUMN `visaNumber`,
    MODIFY `rating` INTEGER NOT NULL;
