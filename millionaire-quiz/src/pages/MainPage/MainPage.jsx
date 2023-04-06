import React, { useEffect, useState } from 'react';
import { questions } from '../../data.js';
import Question from '../../components/Question';
import useQuestion, { QuestionProvider } from '../../providers/QuestionProvider';
import classes from './MainPage.module.css';
import useDialog, { DIALOG, DialogProvider } from '../../providers/DialogProvider.jsx';
import { DialogSwitch } from '../../components/Dialogs/DialogSwitch.jsx';
import { Jokers } from '../../components/Joker/Joker.jsx';
import { Scoreboard } from '../../components/Scoreboard/Scorebaord.jsx';
function MainPage() {
  const { chosenQuestions, currentQuestionIndex, setCurrentQuestionIndex, finish, jokersUsed, updateJokersUsed } = useQuestion();

  const [choiceStates, setChoiceStates] = useState([true, true, true, true]);
  const { open } = useDialog();
  console.log(jokersUsed, currentQuestionIndex);
  const onSubmit = (isCorrect) => {
    setChoiceStates([true, true, true, true]);
    if (isCorrect) {
      if (currentQuestionIndex < 14)
        setCurrentQuestionIndex(prev => prev + 1);
      else {
        console.log("You have won the game and a million dollars!");
        open(DIALOG.INFO, {
          text: "Congratulations",
          info: "You have won the game and a million dollars!",
        });
      }
    }
    else
      finish();


  }



  function fiftyFifty(newChoices) {
    let tempChoices = [false, false, false, false];
    tempChoices[newChoices[0]] = true;
    tempChoices[newChoices[1]] = true;
    console.log(tempChoices);
    setChoiceStates(tempChoices);

  }

  return (
    <div className="MainPage">
      <h1 className={classes.Title}>
        <span>Who</span>
        <span>Wants</span>
        <span>To</span>
        <span>Win</span>
        <span>a</span>
        <span>MILLION</span>
      </h1>
      <div className={classes.GameContainer}>
        <Question question={chosenQuestions[currentQuestionIndex]} onSubmit={onSubmit} availableChoices={choiceStates} />
        <Scoreboard fiftyFifty={fiftyFifty}></Scoreboard>
      </div>
    </div>

  );
}

export default MainPage;
