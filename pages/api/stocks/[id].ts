// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, readUserName, user } from "../../../MongoDB/conncetion";
const url = process.env.MONGODB_URL;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === "GET") {
    await connectDB(url, "MOC");
    const db = await readUserName(user);
    const stock = db.stocks.find((stock) => stock.id === id);
    if (!stock) {
      return res.status(404).json({
        status: 404,
        error: "Track not found",
      });
    }
    return res.status(200).json(stock);
  }
  return res.status(405).end();
};
