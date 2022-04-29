import styles from '../../styles/auth/Login.module.css';
import { LoginForm } from './LoginForm';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

export function Login(): JSX.Element{
    const router: NextRouter = useRouter();

    return (
        <div className={styles.login_form_wrapper}>
            <LoginForm />
            <div className={styles.login_strip} style={{borderBottom: "1px solid #dadde1"}}>
                <Link href={`#`} >Forgotten password?</Link>
            </div>
            <div className={styles.login_strip} style={{height: "100%"}}>
                <button onClick={():void=>{
                    router.push('/signup');
                }}>Create New Account</button>
            </div>
        </div>
    )
}