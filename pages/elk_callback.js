import axios from 'axios';

export default async function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        // Перенаправление на авторизацию в ЕЛК
        const authUrl = `https://lk.orb.ru/oauth/authorize?client_id=25&redirect_uri=http://hackathon_10.orb.ru/elk_callback&response_type=code&scope=personal_data+email+phone&state=http://hackathon_10.orb.ru/`;
        return res.redirect(authUrl);
    }

    try {
        // Получение токенов
        const tokenResponse = await axios.post('https://lk.orb.ru/oauth/token', {
            client_id: 25,
            client_secret: 'A07MVx7dSnHXjvzDDTKs7cQQUtPjrWpjZvR5Kx18',
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

        // Возврат данных пользователя
        return res.status(200).json({ success: true, user: userData });
    } catch (error) {
        console.error('Ошибка авторизации:', error.response?.data || error.message);
        return res.status(500).json({ success: false, error: 'Ошибка авторизации' });
    }
}