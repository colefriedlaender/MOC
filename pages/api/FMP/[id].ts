import { NextApiRequest, NextApiResponse } from "next";
import { withDatabase } from "../../../MongoDB/conncetion";

const key = process.env.API_CODE;

export default withDatabase(async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const result = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/${id}?apikey=${key}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
  const quote = result.map((result) => {
    return {
      id: result.symbol,
      name: result.name,
      priceAPI: result.price,
      change: result.changesPercentage,
    };
  });
  res.status(200).json(quote);
});
