/*
  Warnings:

  - You are about to drop the column `moner` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "moner",
ADD COLUMN     "money" DECIMAL(65,30) NOT NULL DEFAULT 0;
