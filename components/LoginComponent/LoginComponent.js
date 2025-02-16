// components/LoginComponent/LoginComponent.js
import style from './LoginComponent.module.css';

export default function LoginComponent() {
    return (
        <div className={style.LoginComponent}>
            <div className={style.formWrapper}>
                <h2 className={style.title}>Login to Account</h2>

                <form className={style.form}>
                    <div className={style.formGroup}>
                        <label className={style.label}>Email</label>
                        <input
                            type="email"
                            className={style.input}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className={style.formGroup}>
                        <label className={style.label}>Password</label>
                        <input
                            type="password"
                            className={style.input}
                            placeholder="Enter password"
                        />
                    </div>

                    <button type="submit" className={style.submitButton}>
                        Sign In
                    </button>
                </form>

                <p className={style.registerText}>
                    Don't have an account? {' '}
                    <a href="/Reg" className={style.registerLink}>
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}