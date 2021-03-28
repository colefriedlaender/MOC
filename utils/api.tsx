export type MongoInfo = {
  id: string;
  amount: number;
  price: number;
};
export type MongoID = {
  id: string;
};
export type StockAPI = {
  id: string;
  name: string;
  priceAPI: number;
  change: number;
};
export type NewsAPI = {
  title: string;
  link: string;
};
async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getStocksInfoMongo(): Promise<MongoInfo[]> {
  return await fetchURL<MongoInfo[]>("/api/userName");
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
export async function getStockBySearch(id: string): Promise<NewsAPI[]> {
  return await fetchURL<NewsAPI[]>(`/api/FMP/search/${id}`);
}
export async function getStockInfoAPINews(id: string): Promise<NewsAPI[]> {
  return await fetchURL<NewsAPI[]>(`/api/yahoo/${id}`);
}

export async function deleteStock(id: string) {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}
