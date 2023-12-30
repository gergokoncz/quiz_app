/*
  Warnings:

  - You are about to drop the column `option1` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `option2` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `option3` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `option4` on the `Question` table. All the data in the column will be lost.
  - Added the required column `option_four` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option_one` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option_three` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option_two` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "option1",
DROP COLUMN "option2",
DROP COLUMN "option3",
DROP COLUMN "option4",
ADD COLUMN     "option_four" TEXT NOT NULL,
ADD COLUMN     "option_one" TEXT NOT NULL,
ADD COLUMN     "option_three" TEXT NOT NULL,
ADD COLUMN     "option_two" TEXT NOT NULL;
