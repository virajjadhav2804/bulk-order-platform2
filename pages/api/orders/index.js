import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const orders = await prisma.order.findMany();
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    const { itemName, quantity, deliveryDetails } = req.body;
    const order = await prisma.order.create({
      data: {
        itemName,
        quantity,
        deliveryDetails,
        status: 'Pending',
      },
    });
    res.status(201).json(order);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}