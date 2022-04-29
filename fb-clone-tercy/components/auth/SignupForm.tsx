import styles from '../../styles/auth/Login.module.css';

export function SignupForm(): JSX.Element{
    return (
        <form className={styles.signup_form}>
            <input type={`text`} placeholder={`First name`} />
            <input type={`text`} placeholder={`Surname`} />
            <input type={`email`} placeholder={`Email Address`} />
            <input type={`tel`} placeholder={`Mobile number`} />
            <input type={`password`} placeholder={`Password`} />
            <input type={`password`} placeholder={`Confirm Password`} />
            <fieldset>
                <legend>Date of Birth</legend>
                <input type={`date`} placeholder={`Date of birth`} />
            </fieldset>
            <fieldset className={styles.gender_wrapper}>
                <legend>Gender</legend>
                <input type={`radio`} name={`gender`} value={`Female`} id={'gf'} />
                <label htmlFor="gf">Female</label>
                <input type={`radio`} name={`gender`} value={`Male`} id={'gm'} />
                <label htmlFor="gm">Male</label>
                <input type={`radio`} name={`gender`} value={`Custom`} id={'gc'} />
                <label htmlFor="gc">Custom</label>
            </fieldset>
        </form>
    )
}