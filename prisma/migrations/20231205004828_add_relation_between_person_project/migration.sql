-- CreateTable
CREATE TABLE "_PersonToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToProject_AB_unique" ON "_PersonToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToProject_B_index" ON "_PersonToProject"("B");

-- AddForeignKey
ALTER TABLE "_PersonToProject" ADD CONSTRAINT "_PersonToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToProject" ADD CONSTRAINT "_PersonToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
