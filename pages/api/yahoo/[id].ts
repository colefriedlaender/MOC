import { NextApiRequest, NextApiResponse } from "next";
const key = process.env.API_KEY;

export default async function getStockInformationFromAPIBySymbol(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const response = await fetch(
    `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${id}&region=DE`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
  res.status(200).json(response.price.regularMarketOpen);
}
