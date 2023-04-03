import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
export const CreateInfoDialog = ({ isOpen, onClose, text, info }) => {

    const [title, content] = [text, info];

    return (
        <Dialog PaperProps={{backgroundColor : "white"}} open={isOpen} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogTitle>{content}</DialogTitle>
        
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}