import { NextApiRequest, NextApiResponse } from "next";
import { getQuotes } from "../../../../server/financial";

export default async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { ids } = req.query;
  if (typeof ids !== "string") {
    return res.status(400).end();
  }
  const quotes = await getQuotes(ids);

  res.status(200).json(quotes);
}
