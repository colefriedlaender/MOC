import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export type UserDoc = {
  name: string;
  age: number;
};

let client = null;
let db = null;

const url = process.env.MONGODB_URL;

export const user = "Leon Machens";

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "MOC");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectioName) {
  return await db.collection(collectioName);
}

export function closeDB() {
  client.close();
}

export async function readUserName(userName) {
  const userCollection = await getCollection("userName");
  return await userCollection.findOne({ userName: userName });
}

export async function updateUserDoc(
  userName,
  fieldsToUpdate: Partial<UserDoc>
) {
  const userCollection = await getCollection("userName");
  const updateResult = await userCollection.updateOne(
    { name: userName },
    { $set: fieldsToUpdate }
  );
  return updateResult.modifiedCount >= 1;
}

export async function deletePersonnel(userName) {
  const personnelCollection = await getCollection("userName");
  const deleteResult = await personnelCollection.deleteOne({
    name: userName,
  });
  return deleteResult.deletedCount >= 1;
}
export async function getIDsForUser(userName: string) {
  const db = await readUserName(userName);
  return db.stocks.map((result) => {
    return { id: result.id };
  });
}
