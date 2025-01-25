import { NextApiRequest, NextApiResponse } from "next";

// Simpan data pesan ke dalam array untuk sementara (bisa diganti dengan database)
let messages: { id: number; name: string; email: string; message: string; createdAt: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Incoming Request:", req.method, req.body);

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("Validation Failed: Missing fields", { name, email, message });
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);

    console.log("Message Saved:", newMessage);
    return res.status(201).json(newMessage);
  } else if (req.method === "GET") {
    console.log("Fetching Messages");
    return res.status(200).json(messages);
  }

  res.setHeader("Allow", ["POST", "GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
