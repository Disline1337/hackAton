import Link from 'next/link';

export default function LoginPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Страница входа</h1>

            {/* Исправленная ссылка */}
            <Link
                href="/api/auth/elk"
                style={{ color: 'blue', textDecoration: 'underline' }}
            >
                Войти через ЕЛК
            </Link>

            <p style={{ marginTop: '20px' }}>
                <Link
                    href="/"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                >
                    Главная
                </Link>
            </p>
        </div>
    );
}