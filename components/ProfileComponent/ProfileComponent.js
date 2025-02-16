import Link from 'next/link';
import style from './ProfileComponent.module.css';


export default function ProfileComponent({ user }) {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1 className={style.title}>{user.fio || 'User Profile'}</h1>
                <Link href="/" className={style.link} aria-label="Return to homepage">
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
                    Back to Homepage
                </Link>
            </div>

            <div className={style.section}>
                <h2 className={style.sectionTitle}>Personal Information</h2>
                <div className={style.userInfo}>
                    <div className={style.infoItem}>
                        <span className={style.label}>Full Name</span>
                        <span className={style.value}>{user.fio || '—'}</span>
                    </div>
                </div>
            </div>

            <div className={style.section}>
                <h2 className={style.sectionTitle}>Contact Details</h2>
                <div className={style.userInfo}>
                    <div className={style.infoItem}>
                        <span className={style.label}>Email</span>
                        <span className={style.value}>{user.email || '—'}</span>
                    </div>
                    <div className={style.infoItem}>
                        <span className={style.label}>Phone Number</span>
                        <span className={style.value}>{user.phoneNumber || '—'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}