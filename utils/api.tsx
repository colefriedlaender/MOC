export type MongoInfo = {
  id: string;
  amount: number;
  price: number;
};
export type MongoID = {
  id: string;
};
export type StockAPI = {
  name: string;
  id: string;
  priceAPI: number;
  change: number;
};
export type NewsAPI = {
  title: string;
  link: string;
};
export type SearchAPI = {
  id: string;
  name: string;
  price: number;
};
export type StockPrice = {
  id: string;
  name: string;
};
export type StockName = {
  name: string;
};
async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getStocksInfoMongo(): Promise<MongoInfo[]> {
  return await fetchURL<MongoInfo[]>("/api/stocks");
}
export async function getStockInfoMongo(id: string): Promise<MongoInfo> {
  return await fetchURL<MongoInfo>(`/api/stocks/${id}`);
}
export async function getStocksInfoAPI(): Promise<StockAPI[]> {
  return await fetchURL<StockAPI[]>(`/api/FMP`);
}
export async function getStockInfoAPI(id: string): Promise<StockAPI> {
  return await fetchURL<StockAPI>(`/api/FMP/${id}`);
}
export async function getStockInfoAPIName(id: string): Promise<StockName> {
  return await fetchURL<StockName>(`/api/FMP/${id}`);
}
export async function getStockBySearch(id: string): Promise<SearchAPI[]> {
  return await fetchURL<SearchAPI[]>(`/api/FMP/search/${id}`);
}
export async function getStockInfoAPINews(id: string): Promise<NewsAPI[]> {
  return await fetchURL<NewsAPI[]>(`/api/yahoo/${id}`);
}

export async function deleteStock(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}
export const postStock = async (post) => {
  const res = await fetch(`/api/stockList`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(post),
  });

  const data = await res.json();

  return data;
};
