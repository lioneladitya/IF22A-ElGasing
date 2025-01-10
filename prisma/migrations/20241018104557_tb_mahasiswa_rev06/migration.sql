-- CreateTable
CREATE TABLE `tb_penilaian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nilai` DOUBLE NOT NULL,
    `id_mahasiswa` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
