/*
  Warnings:

  - The primary key for the `PersonSkill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PersonSkill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PersonSkill" DROP CONSTRAINT "PersonSkill_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "PersonSkill_pkey" PRIMARY KEY ("personId", "skillId");
