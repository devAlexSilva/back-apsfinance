/*
  Warnings:

  - Added the required column `name` to the `deposits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `withdrawns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deposits" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "withdrawns" ADD COLUMN     "name" TEXT NOT NULL;
