-- CreateTable
CREATE TABLE "UnlockedCharacters" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "character_id" INTEGER NOT NULL,

    CONSTRAINT "UnlockedCharacters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UnlockedCharacters" ADD CONSTRAINT "UnlockedCharacters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnlockedCharacters" ADD CONSTRAINT "UnlockedCharacters_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
