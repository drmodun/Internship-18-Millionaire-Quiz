import { createContext, useState } from "react";
import { Questions } from "../data/Questions";

const defaultContext = {
    additionalProps: null,
    activeDialog: null,
    open : () => {},
    close : () => {},

}

export const DialogContext = createContext(defaultContext);

export const DialogProvider = ({children}) => {
    const [additionalProps, setAdditionalProps] = useState(null);
    const [activeDialog, setActiveDialog] = useState(false);

    const open = (dialog, props) => {
        setAdditionalProps(props);
        setActiveDialog(dialog);
    }

    const close = () => {
        setActiveDialog(null);
    }

    return (
        <DialogContext.Provider value={{
            additionalProps,
            activeDialog,
            open,
            close,
        }}>
            {children}
        </DialogContext.Provider>
    )
}