/*
  Warnings:

  - You are about to alter the column `ingredients` on the `pizzas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `pizzas` MODIFY `ingredients` JSON NULL;
