-- DropIndex
DROP INDEX "Resume_shareSlug_key";

-- AlterTable
ALTER TABLE "Resume" ALTER COLUMN "title" DROP DEFAULT,
ALTER COLUMN "templateId" DROP DEFAULT,
ALTER COLUMN "data" DROP DEFAULT;
