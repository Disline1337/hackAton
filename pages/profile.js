import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/Footer/Footer';
import ProfilComponent from "../components/ProfileComponent/ProfileComponent"

export default function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Получение данных пользователя из cookies
        const userData = document.cookie
            .split('; ')
            .find((row) => row.startsWith('user='))
            ?.split('=')[1];

        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    if (user) {
        return (
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1>Доступ запрещен</h1>
                <p>
                    <Link href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
                        Войти
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div>
            <Header></Header>
            <ProfilComponent user={user }></ProfilComponent>
            <Footer></Footer>
        </div>
    );
}