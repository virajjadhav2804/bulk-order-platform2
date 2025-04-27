import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { name, price } = req.body;
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, price },
    });
    res.status(200).json(product);
  } else if (req.method === 'DELETE') {
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}