import React, { useEffect, useState } from 'react';
import { questions } from '../../data.js';
import Question from '../../components/Question';
import  useQuestion, {QuestionProvider} from '../../providers/QuestionProvider';
import classes from './MainPage.module.css';
import { Board } from '../../components/Quiz/Board.jsx';
import useDialog, { DIALOG, DialogProvider } from '../../providers/DialogProvider.jsx';
import { DialogSwitch } from '../../components/Dialogs/DialogSwitch.jsx';
import { Jokers } from '../../components/Joker/Joker.jsx';
import { useForkRef } from '@mui/material';
function MainPage() {
  const { chosenQuestions, currentQuestionIndex, updateCurrentQuestion, finish, isWon, jokersUsed, updateJokersUsed} = useQuestion();

  const [choiceStates, setChoiceStates] = useState([true , true, true, true]);
  const {open} = useDialog();
  const onSubmit = (isCorrect) => {
    setChoiceStates([true, true, true, true]);
    if (isCorrect){
      if (currentQuestionIndex < 14)
        updateCurrentQuestion();
      else{
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
    <QuestionProvider>
      <DialogProvider>
      <div className="App">
        <h1>Millionaire Quiz</h1>ž
        <div className={classes.GameContainer}>
        <Question question={chosenQuestions[currentQuestionIndex]} onSubmit={onSubmit} availableChoices = {choiceStates}/>
        <Board currentQuestionIndex = {currentQuestionIndex}></Board>
        </div>
        <Jokers fiftyFifty={fiftyFifty} usedFunction = {updateJokersUsed} uses ={jokersUsed} question={chosenQuestions[currentQuestionIndex]} ></Jokers>
      </div>
      <DialogSwitch/>
      </DialogProvider>
    </QuestionProvider>

  );
}

export default MainPage;
