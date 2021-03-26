import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import { getIDsForUser, user, withDatabase } from "../../../MongoDB/conncetion";
dotenv.config();
const key = process.env.API_CODE;

export default withDatabase(async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await getIDsForUser(user);
  const symbol = result.map((entry) => entry.id).join();
  const results = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${key}`,
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
  const quote = results.map((result) => {
    return { id: result.symbol, name: result.name, priceAPI: result.price };
  });
  res.status(200).json(quote);
});
