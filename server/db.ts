import fs from "fs/promises";
import { Stock } from "../utils/api";

type DB = {
  stocks: Stock[];
};

const DB_PATH = "./server/db.json";

export async function readDb(): Promise<DB> {
  const dbJSON = await fs.readFile(DB_PATH, "utf-8");
  const db: DB = JSON.parse(dbJSON);
  return db;
}
