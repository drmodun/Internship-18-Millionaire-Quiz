import { useEffect, useState } from "react";
import classes from "./Question.module.css";
import useDialog, { DIALOG } from "../../providers/DialogProvider";
import { DialogSwitch } from "../Dialogs/DialogSwitch";
import useQuestion from "../../providers/QuestionProvider";
export const Question = ({ question, onSubmit, availableChoices }) => {
    const { open, activeDialog } = useDialog()
    const letters = ["A", "B", "C", "D"];
    const [clicked, setClicked] = useState([0, 0, 0, 0]);
    const [currentIndex, setCurrentIndex] = useState(NaN);
    const { isFrozen, toggleFrozen } = useQuestion();
    const chooseAnswer = (index) => {
        open(DIALOG.SUBMIT, {
            onSubmit: () => {
                handleAnswer(index);
            },
            choice: question.choices[index],
        });
        setCurrentIndex(index);
    }


    const handleAnswer = (index) => {
        toggleFrozen();
        setClicked(prev => prev.map((item, i) => i === index || question.choices[i] === question.answer ? 1 : 0));
        console.log(isFrozen);
        setTimeout(() => {

            if (question.choices[index] === question.answer) {
                onSubmit(true);
            } else {
                onSubmit(false);
            }
            setClicked(prev => prev.map((item, i) => i === index ? 0 : 0));
        }, 3000);

    }

    useEffect(() => {
        if (isFrozen)
            toggleFrozen();
    }, [question])

    return (
        <div>
            <div className={classes.Question}>
                <h2 className={classes.Question__title}>{question.text}</h2>
            </div>
            <div className={classes.Question__answers}>
                {question.choices.map((choice, index) => (
                    <button
                        key={index}
                        className={classes.QuestionAnswerItem}
                        onClick={() => {
                            chooseAnswer(index);
                        }
                        }
                        style={{
                            backgroundColor: clicked[index] ? question.choices[index] === question.answer ? "green" : "red"
                                : currentIndex === index && activeDialog === DIALOG.SUBMIT ? "#FFD700" : "",
                            color: clicked[index] ? "white" : currentIndex === index && activeDialog === DIALOG.SUBMIT ? "black" : ""
                        }}
                        disabled={availableChoices[index] && !isFrozen ? false : true}>
                        <span className={classes.Letter}>{letters[index]}</span> {availableChoices[index] ? choice : " "}
                    </button>
                ))}

            </div>
            <DialogSwitch />
        </div>
    );
}