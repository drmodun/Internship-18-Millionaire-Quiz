import { useContext } from "react";
import { DialogContext } from "../../providers/DialogProvider";
import { QuestionContext } from "../../providers/QuestionProvider";
import classes from "./Board.module.css";
import { dividerClasses } from "@mui/material";

export const Board = (props) => {
    const { activeDialog, close, additionalProps } = useContext(DialogContext);
    const Dialog = activeDialog;
    const questions = useContext(QuestionContext);
    return (
        <div></div>

        )
}