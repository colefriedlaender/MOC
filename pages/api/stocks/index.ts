// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDb } from "../../../server/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    handleGet(req, res);
  }
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const db = await readDb();
  res.status(200).json(db.stocks);
}
