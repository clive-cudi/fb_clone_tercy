import styles from '../styles/auth/Login.module.css';
import Image from 'next/image';
import { SignUp } from '../components';
import { useEffect, useContext } from 'react';
import { QueryResult, useQuery } from '@apollo/client';
// import { SAY_HELLO } from '../graphql';
import { Modal } from '../components';
import { ModalCtx } from '../context';

export default function Signup(): JSX.Element{
    // const hello:QueryResult = useQuery(SAY_HELLO);
    const [modal, setModal] = useContext(ModalCtx);

    // useEffect(():void=>{
    //     console.log(hello.data);
    // }, [])

    return (
        <div>
            <div className={styles.app}>
                <div className={styles.content}>
                    <div className={styles.login_wrapper}>
                        <div className={styles.login_col}>
                            <div className={styles.login_logo_wrapper} style={{position: "relative"}}>
                                <Image src={'/fb_logo_words.svg'} alt={`Facebook`} layout={`fill`} />
                            </div>
                        </div>
                        <div className={styles.login_col}>
                            <SignUp />
                        </div>
                    </div>
                </div>
                {
                    modal.open == true && <Modal data={modal.data} />
                }
            </div>
        </div>
    )
}