import styles from '../../styles/auth/Login.module.css';

export function LoginForm(): JSX.Element{
    return (
        <form>
            <input type={`email`} placeholder={`Email address or phone number`} />
            <input type={`password`} placeholder={`Password`} />
            <button type={`submit`}>Log In</button>
        </form>
    )
}