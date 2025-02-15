import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Главная страница</h1>

            <Link
                href="/login"
                style={{
                    color: 'blue',
                    textDecoration: 'underline',
                    display: 'block',
                    marginTop: '20px'
                }}
            >
                Войти
            </Link>
        </div>
    );
}