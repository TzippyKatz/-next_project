import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;
console.log("Connected to MongoDB");

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
