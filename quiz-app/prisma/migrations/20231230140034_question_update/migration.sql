/*
  Warnings:

  - You are about to drop the column `guess` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "guess",
ADD COLUMN     "time_limit" INTEGER NOT NULL DEFAULT 30;
