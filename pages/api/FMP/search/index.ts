import { NextApiRequest, NextApiResponse } from "next";

const key = process.env.API_CODE;

export default async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results = await fetch(
    `https://financialmodelingprep.com/api/v3/search?query=TSL&limit=10&exchange=NASDAQ&apikey=${key}`,
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
    return { id: result.symbol, name: result.name };
  });
  res.status(200).json(quote);
}
