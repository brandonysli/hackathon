import { PrismaClient } from '@prisma/client';
import { requestToBodyStream } from 'next/dist/server/body-streams';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method == 'POST') {
    try {
      const post = await prisma.posts.findFirst({
        where: {
          id: req.body.id
        },
        data: {
          
        }
      })
    } catch {

    }
  }
}
