// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
    try {
      const specializations = await prisma.specialization.findMany();
      res.status(200).json({data: specializations});
    } catch {
      res.status(500).json({
        message: "error"
      });
    }
  } 
 
}
