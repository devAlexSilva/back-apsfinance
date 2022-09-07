/*
  Warnings:

  - Added the required column `userId` to the `deposits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `withdrawns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deposits" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "withdrawns" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "deposits" ADD CONSTRAINT "deposits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawns" ADD CONSTRAINT "withdrawns_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
