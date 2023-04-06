import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import useQuestion from "../../../providers/QuestionProvider";
export const CreateInfoDialog = ({ isOpen, onClose, text, info }) => {

    const [title, content] = [text, info];
    const { finish } = useQuestion();
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogTitle>{content}</DialogTitle>

            <DialogActions>
                <Button onClick={() => { if (title === "Congratulations") { finish(); onClose() } else onClose() }}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}