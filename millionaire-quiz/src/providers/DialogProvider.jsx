import { createContext, useContext, useState } from "react";

export const DIALOG = {
    SUBMIT: "SUBMIT",
    INFO: "INFO"
}


const defaultContext = {
    additionalProps: null,
    activeDialog: null,
    open: () => { },
    close: () => { },

}

export const DialogContext = createContext(defaultContext);

export const DialogProvider = ({ children }) => {
    const [additionalProps, setAdditionalProps] = useState(defaultContext.additionalProps);
    const [activeDialog, setActiveDialog] = useState(defaultContext.activeDialog);

    const open = (dialog, props) => {
        setAdditionalProps(props);
        setActiveDialog(dialog);
    }

    const close = () => {
        setActiveDialog(null);
        setAdditionalProps({});
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
const useDialog = () => useContext(DialogContext);
export default useDialog;
