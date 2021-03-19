// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, readUserName } from "../../MongoDB/conncetion";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const userPortfolio = await readUserName("Cole");
    res.status(200).json(userPortfolio);
  }
);
