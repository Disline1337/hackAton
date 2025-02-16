import Link from 'next/link';
import Header from "../components/header/header.js"
import Footer from "../components/Footer/Footer.js"
import LoginComponent from "../components/LoginComponent/LoginComponent.js"
export default function LoginPage() {
    return (
        <div className="LoginPage">
            <Header></Header>
            <LoginComponent></LoginComponent>
            <Footer></Footer>
        </div>
    );
}