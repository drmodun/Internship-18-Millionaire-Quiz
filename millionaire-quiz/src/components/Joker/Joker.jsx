import {useEffect, useState } from "react";
import useDialog, { DIALOG } from "../../providers/DialogProvider";
export const Jokers = (props) => {
    const { open } = useDialog();
    const [used, setUsed] = useState(props.uses);

    useEffect(() => {
        setUsed(props.uses);
    }, [props.uses]);

    function phoneAFriend() {
        const question = props.question;
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
        props.usedFunction(0);
    }
    function askTheAudience() {
        const question = props.question;
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
        props.usedFunction(1);
    }
    function fiftyFifty() {
        console.log(used);
        let indexes = [0, 1, 2, 3];
        const question = props.question;
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
        props.usedFunction(2);
        props.fiftyFifty(newChoices);


    }

    return (
        <div>
            <h1>Jokers</h1>
            <button onClick={phoneAFriend} disabled={used[0]}><img></img></button>
            <button onClick={askTheAudience} disabled={used[1]}>Ask the audience</button>
            <button onClick={fiftyFifty} disabled={used[2]}>50/50</button>

        </div>
    );

}