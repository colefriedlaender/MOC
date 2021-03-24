import { NextApiRequest, NextApiResponse } from "next";
// const key = process.env.API_KEY;
// const symbol = "AAPL";
export default async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://investors-exchange-iex-trading.p.rapidapi.com/stock/aapl/book",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3149d31e50msh6d254d7a80185a4p1ff4a4jsn4d989f771b80",
        "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
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
  res.status(200).json(response);
}
