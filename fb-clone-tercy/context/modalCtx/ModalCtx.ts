import React, {Dispatch, SetStateAction, useState} from "react";

interface modalCtxInterface {
    open: boolean,
    data: JSX.Element | null,
}

type modalCtxTypes = {
    open: boolean,
    data: JSX.Element | null
}

export const ModalCtx = React.createContext<[modalCtxInterface, Dispatch<SetStateAction<modalCtxInterface>>] | null>(null);