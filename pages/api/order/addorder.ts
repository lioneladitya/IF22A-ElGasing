import prisma  from "@/lib/prisma"; // Path ini mungkin berbeda di proyekmu
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { customerName, place, country, price, rating } = req.body;

      if (!customerName || !place || !country || !price || !rating) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const order = await prisma.order.create({
        data: {
          customerName,
          place,
          country,
          price: parseFloat(price), // Pastikan tipe data sesuai
          rating: parseFloat(rating),
        },
      });

      return res.status(201).json(order);
    } catch (err) {
      console.error("Server Error:", err);
      return res.status(500).json({ error: "Failed to create order" });
    }
  } else {
    return res.setHeader("Allow", ["POST"]).status(405).end(`Method ${req.method} Not Allowed`);
  }
}
