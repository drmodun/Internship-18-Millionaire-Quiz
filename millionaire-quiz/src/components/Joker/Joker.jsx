import useDialog, { DIALOG } from "../../providers/DialogProvider";
import classes from "./Joker.module.css";
import useQuestion from "../../providers/QuestionProvider";
import { useEffect, useState } from "react";
export const Jokers = (props) => {
    const { jokersUsed, updateJokersUsed, chosenQuestions, currentQuestionIndex } = useQuestion();
    const { open } = useDialog();
    console.log(jokersUsed, chosenQuestions[currentQuestionIndex], currentQuestionIndex);



    function phoneAFriend() {
        const question = chosenQuestions[currentQuestionIndex];
        const rand = Math.floor(Math.random() * 10);
        let answer = "";
        if (rand < 9) {
            answer = question.answer;
        } else {
            do {
                answer = question.choices[Math.floor(Math.random() * 4)];
            } while (answer === question.answer);
        }
        open(DIALOG.INFO, {
            text: "Phone a friend",
            info: "You have called your friend and he/she said the answer is: " + answer,
        });
        updateJokersUsed(0);
    }
    function askTheAudience() {
        const question = chosenQuestions[currentQuestionIndex];
        const rand = Math.floor(Math.random() * 10);
        let answer = "";
        if (rand < 8) {
            answer = question.answer;
        } else {
            do {
                answer = question.choices[Math.floor(Math.random() * 4)];
            } while (answer === question.answer);
        }
        open(DIALOG.INFO, {
            text: "Phone a friend",
            info: "You have asked the audience and they said that the answer is: " + answer,
        });
        updateJokersUsed(1);
    }
    function fiftyFifty() { 
        console.log(jokersUsed);
        let indexes = [0, 1, 2, 3];
        const question = chosenQuestions[currentQuestionIndex];
        const wrongAnswersIndexes = [];
        for (let i = 0; i < question.choices.length; i++) {
            if (question.choices[i] !== question.answer) {
                wrongAnswersIndexes.push(i);
            }
        }
        const rand = Math.floor(Math.random() * wrongAnswersIndexes.length);
        const wrongAnswerIndex = wrongAnswersIndexes[rand];
        wrongAnswersIndexes.splice(rand, 1);
        const rand2 = Math.floor(Math.random() * wrongAnswersIndexes.length);
        const wrongAnswerIndex2 = wrongAnswersIndexes[rand2];
        const newChoices = indexes.filter((choice, index) => index !== wrongAnswerIndex && index !== wrongAnswerIndex2);
        open(DIALOG.INFO, {
            text: "50/50",
            info: "You have removed two wrong answers",
        });
        updateJokersUsed(2);
        props.fiftyFifty(newChoices);


    }

    return (
            <div className={classes.JokerRow}>
                <button onClick={fiftyFifty} disabled={jokersUsed[2]}><img className={classes.logo} alt="50-50" src={"./assets/50-50" + (jokersUsed[2] ? "-off.webp" : ".webp")}></img></button >
                <button onClick={phoneAFriend} disabled={jokersUsed[0]}><img className={classes.logo} alt="Phone a friend" src={"./assets/Phone" + (jokersUsed[0] ? "-off.webp" : ".webp")} /></button>
                <button onClick={askTheAudience} disabled={jokersUsed[1]}><img className={classes.logo} alt="Ask the audience" src={"./assets/ask" + (jokersUsed[1] ? "-off.webp" : ".webp")}></img></button>
            </div >
    );

}