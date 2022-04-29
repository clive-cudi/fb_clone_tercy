import styles from '../../styles/auth/Login.module.css';
import { SignupForm } from './SignupForm';
import Link from 'next/link';

export function SignUp(): JSX.Element{
    return (
        <div className={styles.login_form_wrapper} style={{height: "fit-content"}}>
            <SignupForm />
            <div className={styles.login_strip} style={{borderBottom: "1px solid #dadde1"}}>
                <button>Sign Up</button>
            </div>
            <div className={styles.login_strip}>
                <Link href={`/login`} >Got an account? Login</Link>
            </div>
        </div>
    )
}