// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import { data } from 'autoprefixer';


const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        include: {
            pet: true,
            reviewingUser: {
              include: {
                specialization: true
              }
            }
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      res.status(200).json({data: posts});
    } catch {
      res.status(500).json({
        message: "error"
      });
    }
  } else if (req.method === 'POST') {
    const post = await prisma.post.create({
      data: {
        description: req.body.description,
        title: req.body.title,
        rating: req.body.rating,
        resolved: req.body.resolved,
        area: req.body.area ?? null,
        urgency: req.body.urgency,
        petId: req.body.petId,
        image: req.body.image
      }
    });
    res.status(200).json({ data: post });
  }
}
