// pages/index.js
import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Простой сайт на Next.js</title>
    <meta name="description" content="Пример простого сайта с использованием Next.js" />
        </Head>
        <Header />
        <main>
            <h1>Добро пожаловать на мой сайт!</h1>
    <p>Это пример простого сайта на Next.js.</p>
    </main>
    </div>
);
}
