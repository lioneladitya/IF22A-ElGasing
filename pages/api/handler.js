import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { place, country, price, rating, customerName } = req.body;

      // Validasi input
      if (!place || !country || !price || !rating || !customerName) {
        return res.status(400).json({ message: "Data tidak lengkap!" });
      }

      // Simpan ke database
      const newOrder = await prisma.order.create({
        data: {
          place,
          country,
          price: parseFloat(price),
          rating: parseFloat(rating),
          customerName,
        },
      });

      return res.status(201).json({ message: "Pesanan berhasil dibuat!", order: newOrder });
    } catch (error) {
      console.error("Error adding order:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
  