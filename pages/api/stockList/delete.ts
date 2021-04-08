import type { NextApiRequest, NextApiResponse } from "next";
import { deleteNewStock, user } from "../../../MongoDB/conncetion";
import { withDatabase } from "../../../MongoDB/conncetion";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      await deleteNewStock(user, req.body).then(() => {
        res.status(200).json(req.body);
      });
    }
    return res.status(405).end();
  }
);
