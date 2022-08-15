/*
  Warnings:

  - You are about to drop the `Deposite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Withdrawn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Deposite";

-- DropTable
DROP TABLE "Withdrawn";

-- CreateTable
CREATE TABLE "deposits" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "withdrawns" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "withdrawns_pkey" PRIMARY KEY ("id")
);
