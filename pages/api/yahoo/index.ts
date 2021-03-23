// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
  );
  if (!response) {
    return console.log("ERROR");
  }
  const result = await response.json();
  return result;
}
