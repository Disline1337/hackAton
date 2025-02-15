import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const { error } = router.query;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Страница входа</h1>
            {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
            <p>
                <Link
                    href="/elk_callback"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                >
                    Войти через ЕЛК
                </Link>
            </p>
            <p style={{ marginTop: '20px' }}>
                <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                    Вернуться на главную
                </Link>
            </p>
        </div>
    );
}