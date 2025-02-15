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
                    <div className={style.logo}>Book</div>
                    <div className={style.copyright}>Protect</div>
                </div>

                <div className={style.navSection}>
                    <nav className={style.navLinks}>
                        <a href="/about">Project</a>
                        <a href="/memorial">Book</a>
                        <a href="/map">Map</a>
                        <a href="/contacts">Cont</a>
                    </nav>
                    <button className={style.searchButton}>Seatch</button>
                </div>
            </div>
        </footer>
    )
}