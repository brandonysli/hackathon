import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = await prisma.post.findMany()

console.log(data)