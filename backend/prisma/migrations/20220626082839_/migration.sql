/*
  Warnings:

  - The primary key for the `cep_cache` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `cep_cache` DROP PRIMARY KEY,
    MODIFY `cep` VARCHAR(9) NOT NULL,
    ADD PRIMARY KEY (`cep`);
