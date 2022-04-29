import React, {ComponentElement} from "react";
import { useState } from "react";
import styles from '../../styles/reusable/modal.module.css';

interface modalTypes {
    data: React.ReactNode,
    styling?: object
}

export function Modal({data, styling}: modalTypes): JSX.Element{
    return (
        <div className={styles.modal_wrapper} style={{...styling}}>
            {data}
        </div>
    )
}