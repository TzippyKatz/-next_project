"use client";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import styles from './Card.module.css';

interface cardProps {
    image: string,
    title: string,
    description: string,
    price: number
}

const Card: React.FC<cardProps> = ({ image, title, description, price }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={image} alt={title}></img>
                <div className={styles.heartIcon} onClick={() => setLiked(!liked)}>
                    {liked ? <AiFillHeart color="#e74c3c" /> : <AiOutlineHeart color="#fe0000ff" />}
                </div>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <span className={styles.price}>₪{price}</span>
            </div>
        </div>
    );
}

export default Card;