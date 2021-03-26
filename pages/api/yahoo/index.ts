import { NextApiRequest, NextApiResponse } from "next";
const key = process.env.API_KEY;

export default async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results = await fetch(
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?category=AAPL&region=US",
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
  const cole = results.items.result;
  const leon = cole.map((result) => {
    return { title: result.title, link: result.link };
  });
  res.status(200).json(leon.slice(0, 5));
}
