// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, readUserName, user } from "../../MongoDB/conncetion";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await readUserName(user);
    res.status(200).json(db.stocks);
  }
);
