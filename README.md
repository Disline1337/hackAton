```markdown
# Развертывание сайта на своем устройстве

Этот проект использует Node.js и несколько библиотек для создания веб-сайта. Следующие шаги помогут вам развернуть сайт на вашем устройстве.

## Шаг 1: Клонировать репозиторий

Сначала клонируйте репозиторий на свое устройство:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

## Шаг 2: Установить зависимости

После того как вы клонировали репозиторий, установите все необходимые зависимости с помощью npm:

```bash
npm install
```

Это установит все зависимости, указанные в `package.json`, включая:

- `@nextgis/ngw-map`
- `leaflet`
- `next`
- `react`
- `react-dom`
- `react-leaflet`

## Шаг 3: Настройка файла `.env`

Для подключения к базе данных вам необходимо создать файл `.env` в корне проекта и указать параметры подключения:

1. Создайте файл `.env` в корне проекта.
2. Добавьте в него следующее:

```
DB_LINK=localhost
DB_USER=user
DB_PASS=password
DB_NAME=kpoo
```

## Шаг 4: Запуск сайта

После настройки файла `.env` вы можете запустить сайт с помощью следующей команды:

```bash
npm run dev
```

Это запустит проект в режиме разработки. Перейдите по адресу `http://localhost:3000` в вашем браузере, чтобы увидеть сайт.

## Шаг 5: Построение для продакшн

Если вы хотите собрать проект для продакшн-версии, выполните следующую команду:

```bash
npm run build
```

После этого вы можете запустить продакшн-сборку:

```bash
npm start
```

Теперь сайт будет доступен по адресу `http://localhost:3000`.

## Дополнительные настройки

Если вы хотите изменить настройки подключения к базе данных или другие переменные окружения, вы можете отредактировать файл `.env.local` и перезапустить сервер.

---

Если у вас возникнут вопросы, обращайтесь в Issues на GitHub или пишите мне.
```
