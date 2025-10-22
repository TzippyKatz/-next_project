"use client";

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="https://media.discordapp.net/attachments/1430082456710549605/1430089028384067684/Hadasim_logo_-_header.png?ex=68f881b2&is=68f73032&hm=eb282ed714db58f3083b87fef0ba83c9e846edd1b709e5acea9eac4a4baa0679&=&format=webp&quality=lossless&width=1361&height=626" alt="Hadasim - fashion logo"></img>
            </div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}