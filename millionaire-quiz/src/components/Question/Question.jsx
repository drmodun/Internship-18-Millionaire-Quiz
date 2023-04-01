import { useState } from "react";
import classes from "./Question.module.css";
import useDialog from "../../providers/DialogProvider";
export const Question = ({ question, onAnswer }) => {
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const dialog = useDialog()

    const chooseAnswer = (index) => {
        setSelected(index);
        handleAnswer(index);
    }


    const handleAnswer = (index) => {
        if (question.choices[selected] === question.answer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

        return (
            <div className={classes.Question}>
                <h2 className={classes.Question__title}>{question.question}</h2>
                <div className={classes.Question__answers}>
                    {question.choices.map((choice, index) => (
                        <button
                            key={index}
                            className={classes.Question__answer}
                            onClick={() => {
                                chooseAnswer(index);

                            }}>
                            {choice}
                        </button>
                    ))}

                </div>
            </div>);
    }
