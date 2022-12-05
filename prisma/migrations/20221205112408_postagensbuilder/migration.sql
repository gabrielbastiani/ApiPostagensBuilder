-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "photo" TEXT DEFAULT '/images/avatar.png',
    "name" VARCHAR(75) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "password" TEXT NOT NULL,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passwordRecoverys" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "passwordRecoverys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "like" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "answer" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postrespondes" (
    "id" TEXT NOT NULL,
    "answer" TEXT,
    "like" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,

    CONSTRAINT "postrespondes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "postrespondes_answer_key" ON "postrespondes"("answer");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_answer_fkey" FOREIGN KEY ("answer") REFERENCES "postrespondes"("answer") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postrespondes" ADD CONSTRAINT "postrespondes_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;
