

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        include: {
            pet: true,
            users: true
        }
      });
      res.status(200).json({data: posts});
    } catch {
      res.status(500).json({
        message: "error"
      });
    }
  } 
 
}
