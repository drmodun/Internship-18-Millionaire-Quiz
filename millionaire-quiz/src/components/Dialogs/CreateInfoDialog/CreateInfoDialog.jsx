import { Dialog, DialogTitle, DialogActions, Button, backdropClasses } from "@mui/material";
export const CreateInfoDialog = ({ isOpen, onClose, text, info }) => {

    const { title, content } = [text, info];

    return (
        <Dialog PaperProps={ {backdroungColor : "white"}} open={isOpen} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
                <span>{content}</span>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}