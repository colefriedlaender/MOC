// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, readUserName, user } from "../../../MongoDB/conncetion";
const url = process.env.MONGODB_URL;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    handleGet(req, res);
  }
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  await connectDB(url, "MOC");
  const db = await readUserName(user);
  res.status(200).json(db.stocks);
}
