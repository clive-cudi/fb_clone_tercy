import styles from '../styles/auth/Login.module.css';
import { Login } from '../components';
import Image from 'next/image';

export default function LoginPage(): JSX.Element{
    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <div className={styles.login_wrapper}>
                    <div className={styles.login_col}>
                        <div className={styles.login_logo_wrapper} style={{position: "relative"}}>
                            <Image src={'/fb_logo_words.svg'} alt={`Facebook`} layout={`fill`} />
                        </div>
                    </div>
                    <div className={styles.login_col}>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}