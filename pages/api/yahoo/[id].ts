import { NextApiRequest, NextApiResponse } from "next";

export default async function getStockInformationFromAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const results = await fetch(
    `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?category=${id}&region=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3149d31e50msh6d254d7a80185a4p1ff4a4jsn4d989f771b80",
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
  res.status(200).json(leon.slice(5, 11));
}
