import { getDb } from "./mongo";

export async function fetchProducts() {
    const db = await getDb();
    const products = await db.collection("products").find({}).toArray();
    return products;
}