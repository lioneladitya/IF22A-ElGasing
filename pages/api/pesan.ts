// pages/api/pesan.ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma"; // Pastikan Prisma client telah diatur di `lib/prisma.ts`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { place, country, price, rating, customerName, visaNumber } = req.body;

      // Validasi input
      if (!customerName || !place || !price || !rating || !country) {
        return res.status(400).json({ message: "Data tidak lengkap!" });
      }

      // Simpan data ke database
      const pesan = await prisma.pesan.create({
        data: {
          place,
          country,
          price: parseFloat(price),
          rating: parseFloat(rating),
          customerName,
          // visaNumber: visaNumber || null, // Bisa null jika tidak diisi
        },
      });

      return res.status(201).json({ message: "Pesanan berhasil dibuat!", data: pesan });
    } catch (error) {
      console.error("Error saving order:", error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
  } else {
    return res.status(405).json({ message: "Metode tidak diizinkan." });
  }
}
