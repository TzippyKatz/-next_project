export const fetchProducts = async () => {
    const res = await fetch('/api/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products from SERVICE');
    }
    return res.json();
};
