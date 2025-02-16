import Link from 'next/link';
import Header from "../components/header/header.js"
import Footer from "../components/Footer/Footer.js"
import RegComponent from '../components/RegComponent/RegComponent.js';
export default function RegPage() {
    return (
        <div className="RegPage">
            <Header></Header>
            <RegComponent></RegComponent>
            <Footer></Footer>
        </div>
    );
}