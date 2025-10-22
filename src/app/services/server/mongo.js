import { MongoClient, ServerApiVersion } from "mongodb";

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

console.log("My secret code is:", MONGO_PASSWORD);
const uri = `mongodb+srv://zk6722355:${MONGO_PASSWORD}@tzippy.qkrolde.mongodb.net/?retryWrites=true&w=majority&authSource=admin`;
const DB_NAME = "ShopDB";

let client;
let clientPromise;

// global clientPromise
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// function returns instance
export async function getDb() {
  const c = await clientPromise;
  return c.db(DB_NAME);
}
