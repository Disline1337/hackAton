import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './LoginComponent.module.css';
import Link from 'next/link';

const LoginComponent = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.push('/profile');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.LoginComponent}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="emailOrPhone" className={styles.label}>Email or Phone Number</label>
                        <input
                            type="text"
                            id="emailOrPhone"
                            name="emailOrPhone"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>Login</button>
                </form>

                <p className={styles.registerText}>
                    Don't have an account?{' '}
                    <Link href="/register" className={styles.registerLink}>
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;