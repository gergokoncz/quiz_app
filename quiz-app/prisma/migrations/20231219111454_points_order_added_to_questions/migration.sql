/*
  Warnings:

  - Added the required column `order_in_quiz` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "order_in_quiz" INTEGER NOT NULL,
ADD COLUMN     "point" INTEGER NOT NULL DEFAULT 1;
