-- CreateTable
CREATE TABLE "Deposite" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "Deposite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Withdrawn" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "info" TEXT NOT NULL,

    CONSTRAINT "Withdrawn_pkey" PRIMARY KEY ("id")
);
