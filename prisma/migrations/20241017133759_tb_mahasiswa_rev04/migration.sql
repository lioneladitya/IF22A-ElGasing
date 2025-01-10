/*
  Warnings:

  - You are about to alter the column `nama` on the `tb_mahasiswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `tb_mahasiswa` MODIFY `nama` VARCHAR(50) NOT NULL;
