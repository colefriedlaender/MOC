import { Collection, Db, MongoClient } from "mongodb";
let client: MongoClient = null;
let db: Db = null;
export type UserNameDoc = {
  userName: string;
  age: number;
};

export async function connectDB(url: string, dbName: string) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}
export function getCollection<T>(collectionName: string): Collection {
  return db.collection<T>(collectionName);
}
export function closeDB() {
  client.close();
}
export async function readUserName(userNameId: string) {
  const UserNameCollection = await getCollection<UserNameDoc | null>(
    "userName"
  );
  const userNameDoc = await UserNameCollection.findOne({ id: userNameId });
  if (!userNameDoc) {
    return null;
  }
  return {
    name: userNameDoc.dbName,
    age: userNameDoc.dbAge,
  };
}
