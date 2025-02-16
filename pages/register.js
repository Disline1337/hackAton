import Link from "next/link";

export default function RegisterPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Страница входа</h1>
            <p>
                <Link
                    //href={`https://lk.orb.ru/oauth/authorize?client_id=25&redirect_uri=http://hackathon-10.orb.ru/elk_callback&response_type=asdasd&scope=personal_data+email+phone&state=http://hackathon-10.orb.ru/`}
                    //href={"https://lk.orb.ru/oauth/authorize?client_id=25&redirect_uri=http://hackathon_10.orb.ru/elk_callback&response_type=code&scope=rsaag_id+esia_data+email+phone+esia_user_id+organizations_user+auth_method&state=https://hackathon-10.orb.ru/"}
                    href={"https://lk.orb.ru/oauth/authorize?client_id=25&redirect_uri=https://hackathon-10.orb.ru/elk_callback&response_type=code&scope=email+auth_method&state=https://hackathon-10.orb.ru"}
                    style={{ color: 'blue', textDecoration: 'underline' }}
                >
                    Войти через ЕЛК
                </Link>
            </p>
        </div>
    )
}