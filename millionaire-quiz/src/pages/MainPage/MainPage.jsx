import React, { useState } from 'react';
import Question from '../../components/Question';
import useQuestion from '../../providers/QuestionProvider';
import classes from './MainPage.module.css';
import useDialog, { DIALOG } from '../../providers/DialogProvider.jsx';
import Scoreboard from '../../components/Scoreboard/';
function MainPage() {
  const { chosenQuestions, currentQuestionIndex, setCurrentQuestionIndex, finish } = useQuestion();

  const [choiceStates, setChoiceStates] = useState([true, true, true, true]);
  const { open } = useDialog();
  const onSubmit = (isCorrect) => {
    setChoiceStates([true, true, true, true]);
    if (isCorrect) {
      if (currentQuestionIndex < 14)
        setCurrentQuestionIndex(prev => prev + 1);
      else {
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
