import { useEffect, useState } from "react";
import classes from "./Question.module.css";
import useDialog, { DIALOG } from "../../providers/DialogProvider";
import { DialogSwitch } from "../Dialogs/DialogSwitch";
import { questions } from "../../data";
export const Question = ({ question, onSubmit, availableChoices}) => {
    const {open, activeDialog} = useDialog()
    const letters = ["A", "B", "C", "D"];
    const [clicked, setClicked] = useState([0,0,0,0]);
    console.log(question);
    const chooseAnswer = (index) => {
        open( DIALOG.SUBMIT, {
            onSubmit: () => {
                handleAnswer(index);
            },
            choice : question.choices[index],
        });
        //handleAnswer(index);
    }


    const handleAnswer = (index) => {
        console.log(index, question.choices[index], question.answer);
        setClicked(prev=>prev.map((item, i) => i === index || question.choices[i] === question.answer ? 1 : 0));
        setTimeout(() => {
            if (question.choices[index] === question.answer) {
                console.log("correct");
                onSubmit(true);
            } else {
                console.log("wrong");
                onSubmit(false);
            }
            setClicked(prev=>prev.map((item, i) => i === index ? 0 : 0));
        }, 3000);
        
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

                        }
                        }
                        style={{backgroundColor : clicked[index] ? question.choices[index] === question.answer ? "green" : "red" : ""}}
                         disabled = {availableChoices[index] ? false : true }>
                        <span className={classes.Letter}>{letters[index]}</span> {availableChoices[index] ? choice : " "}
                    </button>
                ))}

            </div>
            <DialogSwitch/>
        </div>
            );
    }