/*
  Warnings:

  - You are about to drop the column `creater` on the `Quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "creater",
ADD COLUMN     "creator" TEXT NOT NULL DEFAULT 'anonymous';
