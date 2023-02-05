import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// GET //
// default
app.get('/api', (req, res) => {
  res.json({message: 'Node + Express + React + PostgreSQL'});
});

// get a user's posts
app.get('/user/post', async (req, res) => {
  try {
    const data = JSON.stringify(req);
    const posts = await prisma.user.findMany({
      where: {
        userId: data.id
      }
    });
    res.status(200).json(posts);
  } catch {
    res.status(500).json({
      message: error
    });
  }
});

// get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await prisma.posts.findMany();
    res.status(200).json(posts);
  } catch {
    res.status(500).json({
      message: error
    });
  }
});

// POST //
// create post
app.post('/post', async (req, res) => {
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
      message: error
    });
  }
  
});



export default app;