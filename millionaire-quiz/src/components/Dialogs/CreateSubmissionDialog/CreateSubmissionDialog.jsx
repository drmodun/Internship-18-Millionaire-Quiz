import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export const CreateSumbmissionDialog = ({ isOpen, onClose, onSubmit, choice}) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog PaperProps={{backgroundColor : "white"}} open={isOpen} onClose={onClose}>
      <DialogTitle>Are you sure you want to select {choice} as your final answer?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={handleSubmit}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};
