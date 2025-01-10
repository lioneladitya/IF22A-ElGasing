-- AddForeignKey
ALTER TABLE `tb_penilaian` ADD CONSTRAINT `tb_penilaian_id_mahasiswa_fkey` FOREIGN KEY (`id_mahasiswa`) REFERENCES `tb_mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
