// pages/index.js
import Header from '../components/header/header'
import { Montserrat } from 'next/font/google';
import Content from "../components/Content/Content"
import Footer from '../components/Footer/Footer';
const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic']
});

export default function Home() {
    return (
        <main>
            <Header></Header>
            <div className={`${"BottonFooter"} ${montserrat.className}`}>Книга памяти</div>
            <Content></Content>
            <Footer></Footer>
        </main>
);
}
