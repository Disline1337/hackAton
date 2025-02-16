import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/Footer/Footer';
import ProfilComponent from "../components/ProfileComponent/ProfileComponent"

export default function ProfilePage() {
    const [user, setUser] = useState(null);

    const user1 = {
        id: 213,
        fio: "dsfdsf",
        email: "sdfsdf@fdsf",
        phoneNumber: "234244423",
    }

    useEffect(() => {
     
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
                <h1>No</h1>
                <p>
                    <Link href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
                        Join
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div>
            <Header></Header>
            <ProfilComponent user={user1 }></ProfilComponent>
            <Footer></Footer>
        </div>
    );
}