/*
  Warnings:

  - The primary key for the `cep_cache` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cep` on the `cep_cache` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(8)`.

*/
-- AlterTable
ALTER TABLE `cep_cache` DROP PRIMARY KEY,
    MODIFY `cep` VARCHAR(8) NOT NULL,
    MODIFY `logradouro` VARCHAR(200) NOT NULL,
    MODIFY `complemento` VARCHAR(200) NULL,
    MODIFY `bairro` VARCHAR(200) NOT NULL,
    MODIFY `localidade` VARCHAR(200) NOT NULL,
    MODIFY `uf` VARCHAR(200) NOT NULL,
    MODIFY `ibge` VARCHAR(200) NOT NULL,
    MODIFY `gia` VARCHAR(200) NOT NULL,
    MODIFY `ddd` VARCHAR(200) NOT NULL,
    MODIFY `siafi` VARCHAR(200) NOT NULL,
    ADD PRIMARY KEY (`cep`);
