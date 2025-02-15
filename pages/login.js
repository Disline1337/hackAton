import Link from 'next/link';

export default function LoginPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Страница входа</h1>
            <p>
                <Link href="/api/auth/elk">
                    <a style={{ color: 'blue', textDecoration: 'underline' }}>Войти через ЕЛК</a>
                </Link>
            </p>
            <p>
                Вернуться на главную страницу:{' '}
                <Link href="/">
                    <a style={{ color: 'blue', textDecoration: 'underline' }}>Главная</a>
                </Link>
            </p>
        </div>
    );
}