export default async function getStockInformation() {
  const response = await fetch(
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=AAPL&region=DE",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3fab7dc221msh592492bed2b6837p1b7a17jsnb4f5b866bad9",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
  return response;
}
