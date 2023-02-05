

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
    } catch {
      res.status(500).json({
        message: "error"
      });
    }
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
}
