import { NextApiRequest, NextApiResponse } from "next";
import { getQuotes } from "../../../../server/financial";

const key = process.env.API_CODE;

export default async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  const results = await fetch(
    `https://financialmodelingprep.com/api/v3/search?query=${name}&limit=10&exchange=NASDAQ&apikey=${key}`,
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
  const ids = quote.map((entry) => entry.id).join();
  const quotes = await getQuotes(ids);
  const a1 = quotes;
  const a2 = quote;
  const stock = a1.map((quotes) => ({
    ...quotes,
    ...a2.find((quote) => quote.id === quotes.id),
  }));
  res.status(200).json(stock.slice(0, 6));
}
