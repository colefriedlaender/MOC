const key = process.env.API_CODE;
export async function getQuotes(ids: string) {
  const result = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/${ids}?apikey=${key}`,
    {
      method: "GET",
    }
  ).then((response) => {
    return response.json();
  });
  const quotes = result.map((result) => {
    return {
      id: result.symbol,
      price: result.price,
    };
  });
  return quotes;
}
