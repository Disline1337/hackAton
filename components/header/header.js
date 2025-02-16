import Link from 'next/link';
import styles from './header.module.css';
import { Montserrat } from 'next/font/google';
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic']
});

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <header className={`${styles.header} ${montserrat.className}`}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.link} href="/about">О проекте</Link> {/* Changed from "About Project" to "О проекте" */}
                </li>
                <li>
                    <Link className={styles.link} href="/memory-book">Книга памяти</Link> {/* Changed from "Memory Book" to "Книга памяти" */}
                </li>
                <li>
                    <Link className={styles.link} href="/MapPage">Интерактивная карта</Link> {/* Changed from "Interactive Map" to "Интерактивная карта" */}
                </li>
                <li>
                    <Link className={styles.link} href="/contacts">Контакты</Link> {/* Changed from "Contacts" to "Контакты" */}
                </li>
            </ul>
            <div className={styles.inblock}>
                <div className={styles.search}>
                    <IoIosSearch />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Поиск" // Russian for "Search"
                        className={styles.searchInput}
                    />
                </div>
                <Link className={styles.link} href="/login">
                    <CgProfile className={styles.CgProfile} />
                </Link>
            </div>
        </header>
    );
};

export default Header;