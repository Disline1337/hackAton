import Link from 'next/link';
import style from './ProfileComponent.module.css';

export default function ProfileComponent({ user }) {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1 className={style.title}>{user.fio || 'Профиль пользователя'}</h1> {/* Changed from "User Profile" to "Профиль пользователя" */}
                <Link href="/" className={style.link} aria-label="Вернуться на главную страницу">
                    <svg
                        className={style.linkIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Вернуться на главную страницу {/* Changed from "Back to Homepage" to "Вернуться на главную страницу" */}
                </Link>
            </div>

            <div className={style.section}>
                <h2 className={style.sectionTitle}>Личная информация</h2> {/* Changed from "Personal Information" to "Личная информация" */}
                <div className={style.userInfo}>
                    <div className={style.infoItem}>
                        <span className={style.label}>Полное имя</span> {/* Changed from "Full Name" to "Полное имя" */}
                        <span className={style.value}>{user.fio || '—'}</span>
                    </div>
                </div>
            </div>

            <div className={style.section}>
                <h2 className={style.sectionTitle}>Контактные данные</h2> {/* Changed from "Contact Details" to "Контактные данные" */}
                <div className={style.userInfo}>
                    <div className={style.infoItem}>
                        <span className={style.label}>Электронная почта</span> {/* Changed from "Email" to "Электронная почта" */}
                        <span className={style.value}>{user.email || '—'}</span>
                    </div>
                    <div className={style.infoItem}>
                        <span className={style.label}>Номер телефона</span> {/* Changed from "Phone Number" to "Номер телефона" */}
                        <span className={style.value}>{user.phoneNumber || '—'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}