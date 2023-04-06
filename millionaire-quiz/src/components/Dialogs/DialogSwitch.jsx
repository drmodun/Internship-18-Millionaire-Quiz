import useDialog, { DIALOG } from "../../providers/DialogProvider";
import CreateInfoDialog from "./CreateInfoDialog";
import CreateSumbmissionDialog from "./CreateSubmissionDialog";
export const DialogSwitch = () => {
    const { activeDialog, additionalProps, close } = useDialog();
    return (
        <div>

            <CreateInfoDialog isOpen={activeDialog === DIALOG.INFO} onClose={close} {...additionalProps} />
            <CreateSumbmissionDialog isOpen={activeDialog === DIALOG.SUBMIT} onClose={close} {...additionalProps} />
        </div>
    );

}