// components/Header.js
import Link from 'next/link';
import styles from './header.module.css';
import { Montserrat } from 'next/font/google';
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react'; // Импортируйте useState для управления состоянием ввода

const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic']
});

const Header = () => {
    const [searchQuery, setSearchQuery] = useState(''); // Создайте состояние для текста поиска

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value); // Обновите состояние при изменении ввода
    };

    return (
        <header className={`${styles.header} ${montserrat.className}`}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.link }  href="/about">О проекте</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/memory-book">Книга памяти</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/interactive-map">Интерактивная карта</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/contacts">Контакты</Link>
                </li>
            </ul>
            <div className={styles.inblock}>
                <div className={styles.search}>
                    <IoIosSearch />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Поиск"
                        className={styles.searchInput} // Добавьте класс для поля ввода
                    />
                </div>
                <CgProfile className={styles.CgProfile} />
            </div>
        </header>
    );
};

export default Header;