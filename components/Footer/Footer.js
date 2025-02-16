// components/Footer/Footer.js
import style from "./Footer.module.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '500', '700']
});

export default function Footer() {
    return (
        <footer className={`${style.Footer} ${montserrat.className}`}>
            <div className={style.footerContent}>
                <div className={style.logoSection}>
                    <div className={style.logo}>Книга</div> {/* Changed from "Book" to "Книга" */}
                    <div className={style.copyright}>Защита</div> {/* Changed from "Protect" to "Защита" */}
                </div>

                <div className={style.navSection}>
                    <nav className={style.navLinks}>
                        <a href="/about">Проект</a> {/* Changed from "Project" to "Проект" */}
                        <a href="/memorial">Книга</a> {/* Changed from "Book" to "Книга" */}
                        <a href="/map">Карта</a> {/* Changed from "Map" to "Карта" */}
                        <a href="/contacts">Контакты</a> {/* Changed from "Cont" to "Контакты" */}
                    </nav>
                    <button className={style.searchButton}>Поиск</button> {/* Changed from "Seatch" to "Поиск" */}
                </div>
            </div>
        </footer>
    );
}