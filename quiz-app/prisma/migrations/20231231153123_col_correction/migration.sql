/*
  Warnings:

  - You are about to drop the column `guess_correct` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "guess_correct",
ADD COLUMN     "correct_guess" INTEGER NOT NULL DEFAULT 0;
