import { useEffect, useState } from "react";
import classes from "./Question.module.css";
import useDialog from "../../providers/DialogProvider";
export const Question = ({ question, onSubmit }) => {
    const dialog = useDialog()
    const letters = ["A", "B", "C", "D"];
    console.log(question);
    const chooseAnswer = (index) => {
        handleAnswer(index);
    }


    const handleAnswer = (index) => {
        console.log(index, question.choices[index], question.answer);
        if (question.choices[index] === question.answer) {
            console.log("correct");
            onSubmit(true);
        } else {
            console.log("wrong");
            onSubmit(false);
        }

    }

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

                        }}>
                        <span className={classes.Letter}>{letters[index]}</span> {choice}
                    </button>
                ))}

            </div>
        </div>
            );
    }