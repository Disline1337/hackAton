import { useEffect, useState } from 'react';
import Link from 'next/link';

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

    if (!user) {
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
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Профиль пользователя</h1>
            <p>Имя: {user.personal_data?.first_name}</p>
            <p>Фамилия: {user.personal_data?.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Телефон: {user.phone}</p>
            <p>
                <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                    Вернуться на главную
                </Link>
            </p>
        </div>
    );
}