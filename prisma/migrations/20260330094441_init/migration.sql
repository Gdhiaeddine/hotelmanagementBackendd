-- CreateEnum
CREATE TYPE "GuestType" AS ENUM ('INDIVIDUAL', 'COMPANY');

-- CreateEnum
CREATE TYPE "IDType" AS ENUM ('PASSPORT', 'NATIONAL_ID', 'DRIVER_LICENSE');

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "note" TEXT;

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "guestType" "GuestType" NOT NULL,
    "nom" TEXT,
    "companyName" TEXT,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "idNumber" TEXT NOT NULL,
    "idType" "IDType" NOT NULL,
    "address" TEXT,
    "nationality" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");
