-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "description" TEXT,
ADD COLUMN     "token" TEXT NOT NULL DEFAULT '123456';
