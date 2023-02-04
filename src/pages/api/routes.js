import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// default route
app.get('/', (req, res) => {
  res.json('Node + Express + React + PostgreSQL');
})

// create post
app.post('/user/post', (req, res) => {
  const data = JSON.stringify(req);
  const post = prisma.post.create()
})

export default module;