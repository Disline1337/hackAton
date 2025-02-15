import Link from 'next/link';

export default function LoginPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Страница входа</h1>
            <p>
                <Link
                    href={`https://lk.orb.ru/oauth/authorize?client_id=25&redirect_uri=http://hackathon_10.orb.ru/elk_callback&response_type=code&scope=personal_data+email+phone&state=http://hackathon_10.orb.ru/`}
                    style={{ color: 'blue', textDecoration: 'underline' }}
                >
                    Войти через ЕЛК
                </Link>
            </p>
        </div>
    );
}