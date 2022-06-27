/*
  Warnings:

  - The primary key for the `cep_cache` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cep` on the `cep_cache` table. The data in that column could be lost. The data in that column will be cast from `VarChar(9)` to `VarChar(8)`.

*/
-- AlterTable
ALTER TABLE `cep_cache` DROP PRIMARY KEY,
    MODIFY `cep` VARCHAR(8) NOT NULL,
    ADD PRIMARY KEY (`cep`);
