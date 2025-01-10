/*
  Warnings:

  - You are about to drop the column `jurusan` on the `tb_mahasiswa` table. All the data in the column will be lost.
  - Added the required column `prodi` to the `tb_mahasiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_mahasiswa` DROP COLUMN `jurusan`,
    ADD COLUMN `prodi` VARCHAR(20) NOT NULL,
    MODIFY `npm` CHAR(8) NOT NULL,
    ALTER COLUMN `status` DROP DEFAULT;
