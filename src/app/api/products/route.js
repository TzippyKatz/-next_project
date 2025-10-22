import { fetchProducts } from '../../services/server/products';

export async function GET() {
    try {
        const products = await fetchProducts();
        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error in GET /api/products:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch products from server' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}