import { useState } from 'react';
import styles from './LoginComponent.module.css'; // Assuming you have a CSS module for styling
import Link from 'next/link';

const LoginComponent = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/loginUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Login successful!');
                // You can redirect to a dashboard or store the user session/token here
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            alert('An error occurred while logging in.');
            console.error(error);
        }
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
