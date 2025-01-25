-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customerName` VARCHAR(255) NOT NULL,
    `visaNumber` VARCHAR(50) NULL,
    `place` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `price` VARCHAR(50) NOT NULL,
    `rating` VARCHAR(50) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
