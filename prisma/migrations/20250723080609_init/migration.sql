-- CreateTable
CREATE TABLE `Camera` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Incident` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cameraId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `tsStart` DATETIME(3) NOT NULL,
    `tsEnd` DATETIME(3) NOT NULL,
    `thumbnailUrl` VARCHAR(191) NOT NULL,
    `resolved` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_cameraId_fkey` FOREIGN KEY (`cameraId`) REFERENCES `Camera`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
