"use client";

import styles from "./ProductList.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/client/products";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={styles.cardContainer}>
            {products.map((p) =>
            (
                <Card
                    key={p._id.toString()}
                    image={p.img}
                    title={p.title}
                    description={p.desc}
                    price={p.price}
                />
            ))}
        </div>
    );
}