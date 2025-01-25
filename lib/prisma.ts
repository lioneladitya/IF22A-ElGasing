import { PrismaClient } from "@prisma/client";

// Cegah pembuatan banyak instance Prisma di development
declare global {
  // Untuk mencegah TypeScript error
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
