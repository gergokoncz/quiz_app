-- CreateTable
CREATE TABLE "Quiz" (
    "id" SERIAL NOT NULL,
    "creater" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL,
    "playable_from_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);
