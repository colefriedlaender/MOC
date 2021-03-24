export type Stock = {
  userName: string;
  id: string;
  name: string;
  rate: number;
  amount: number;
  price: number;
  total: number;
};
export type StockPrice = {
  fmt: string;
  raw: number;
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
export async function getStocksfromAPI(): Promise<StockPrice> {
  return await fetchURL<StockPrice>(`/api/yahoo/price`);
}
