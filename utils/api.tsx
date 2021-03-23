export type Stock = {
  userName: string;
  id: string;
  name: string;
  rate: number;
  amount: number;
  price: number;
  total: number;
};
async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getStocks(): Promise<Stock[]> {
  return await fetchURL<Stock[]>("/api/userName");
}

export async function getStock(id: string): Promise<Stock> {
  return await fetchURL<Stock>(`/api/stocks/${id}`);
}
export async function deleteStock(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}
export async function getStockInformation() {
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
  return console.log({ response });
}
