import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Главная страница</h1>
            <p>
                Перейти на страницу входа:{' '}
                <Link href="/login">
                    <a style={{ color: 'blue', textDecoration: 'underline' }}>Войти</a>
                </Link>
            </p>
        </div>
    );
}
