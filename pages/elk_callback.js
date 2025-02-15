import axios from 'axios';

export default async function handler(req, res) {
    try {
        // Проверка метода запроса
        if (req.method !== 'GET') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        // Получение параметров из запроса
        const { code, state, error } = req.query;

        // Логирование для отладки
        console.log('Received query params:', { code, state, error });

        // Обработка ошибок от ЕЛК
        if (error) {
            console.error('Error from ELK:', error);
            return res.redirect(`/login?error=${error}`);
        }

        // Проверка наличия кода авторизации
        if (!code) {
            console.error('Missing authorization code');
            return res.redirect('/login?error=missing_code');
        }

        // Проверка параметра state (защита от CSRF)
        if (state !== 'http://hackathon_10.orb.ru/') {
            console.error('Invalid state parameter:', state);
            return res.redirect('/login?error=invalid_state');
        }

        // Получение токенов от ЕЛК
        const tokenResponse = await axios.post('https://lk.orb.ru/oauth/token', {
            client_id: process.env.ELK_CLIENT_ID, // Используем переменные окружения
            client_secret: process.env.ELK_CLIENT_SECRET,
            redirect_uri: 'http://hackathon_10.orb.ru/elk_callback',
            code,
            grant_type: 'authorization_code',
        });

        const { access_token } = tokenResponse.data;

        // Получение данных пользователя
        const userResponse = await axios.get('https://lk.orb.ru/api/get_user', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            params: {
                scope: 'personal_data+email+phone',
            },
        });

        const userData = userResponse.data;

        // Сохранение данных пользователя (например, в cookies или localStorage)
        res.setHeader('Set-Cookie', `user=${JSON.stringify(userData)}; Path=/; HttpOnly`);

        // Перенаправление на страницу профиля
        res.redirect('/profile');
    } catch (error) {
        console.error('Ошибка авторизации:', error.response?.data || error.message);
        res.redirect('/login?error=auth_failed');
    }
}