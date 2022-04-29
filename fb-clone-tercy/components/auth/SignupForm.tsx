import { useState } from 'react';
import styles from '../../styles/auth/Login.module.css';
import { useMutation } from '@apollo/client';
import { REGISTER_MUTATION } from '../../graphql';

export function SignupForm(): JSX.Element{
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [register, {}] = useMutation(REGISTER_MUTATION);

    function submitRegistration(): void{
        if (firstName !== '' && surname !== '' && email !== '' && phone !== '' && (password == confirmPass) && password !== ''){
            register({
                variables: {
                    input: {
                        firstName,
                        surname,
                        email,
                        mobile: phone,
                        password
                    }
                }
            }).then((res)=>{
                console.log(res.data);
            }).catch((err)=>{
                console.error(err);
            })
        }
    }

    return (
        <form className={styles.signup_form} onSubmit={(e):void=>{
            e.preventDefault();
        }}>
            <input type={`text`} placeholder={`First name`} onChange={(e):void=>{setFirstName(e.target.value)}} />
            <input type={`text`} placeholder={`Surname`} onChange={(e):void=>{setSurname(e.target.value)}} />
            <input type={`email`} placeholder={`Email Address`} onChange={(e):void=>{setEmail(e.target.value)}} />
            <input type={`tel`} placeholder={`Mobile number`} onChange={(e):void=>{setPhone(e.target.value)}} />
            <input type={`password`} placeholder={`Password`} onChange={(e):void=>{setPassword(e.target.value)}} />
            <input type={`password`} placeholder={`Confirm Password`} onChange={(e):void=>{setConfirmPass(e.target.value)}} />
            <fieldset>
                <legend>Date of Birth</legend>
                <input type={`date`} placeholder={`Date of birth`} onChange={(e):void=>{setDate(e.target.value)}} />
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
            <div className={styles.login_strip} style={{borderBottom: "1px solid #dadde1"}}>
                <button onClick={():void=>{
                    submitRegistration();
                }}>Sign Up</button>
            </div>
        </form>
    )
}