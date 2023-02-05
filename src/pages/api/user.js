

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

<<<<<<< HEAD
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({data: users});
=======
export default async function handler(req, res) {
  if (req.method == 'GET') {
    try {
      const data = JSON.stringify(req);
      const posts = await prisma.user.findMany({
        where: {
          userId: data.id
        }
      });
      res.status(200).json(posts);
>>>>>>> 6ca7df0103c7b71ec025806068ba595e06f67a95
    } catch {
      res.status(500).json({
        message: "error"
      });
    }
<<<<<<< HEAD
  } 
 
=======
  } else if (req.method == 'POST') {
    try {
      const data = JSON.stringify(req);
      const post = await prisma.post.create({
        data: {
          description: data.description,
          title: data.title,
          user: data.user,
          rating: data.rating
        }
      });
      res.status(200).json(post);
    } catch {
      res.status(500).json({
        message: "error"
      });
    }
  }
>>>>>>> 6ca7df0103c7b71ec025806068ba595e06f67a95
}
