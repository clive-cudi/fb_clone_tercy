import { ModalCtx } from '../../context';
import { useContext, useState } from 'react';


interface providerProps {
    children: React.ReactNode | JSX.Element
}

interface modalCtxStateInterface {
    open: boolean,
    data: JSX.Element | null,
}

export const ModalCtxProvider = ({children}: providerProps) =>{
    const [modal, setModal] = useState<modalCtxStateInterface>({
        open: false,
        data: null
    })

    return (
        <ModalCtx.Provider value={[modal, setModal]}>
            {children}
        </ModalCtx.Provider>
    )
}