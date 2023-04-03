import React, { useState } from 'react';
import { questions } from '../../data.js';
import Question from '../../components/Question';
import  useQuestion, {QuestionProvider} from '../../providers/QuestionProvider';
import classes from './MainPage.module.css';
import { Board } from '../../components/Quiz/Board.jsx';
import { DialogProvider } from '../../providers/DialogProvider.jsx';
import { DialogSwitch } from '../../components/Dialogs/DialogSwitch.jsx';
import { Jokers } from '../../components/Joker/Joker.jsx';
function MainPage() {
  const { chosenQuestions, currentQuestionIndex, updateCurrentQuestion, resetQuestions } = useQuestion();

  const [choiceStates, setChoiceStates] = useState([true , true, true, true]);
  const onSubmit = (isCorrect) => {
    setChoiceStates([true, true, true, true]);
    if (isCorrect)
      updateCurrentQuestion();
    else
      resetQuestions();
    

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
        <Jokers fiftyFifty={fiftyFifty}></Jokers>
      </div>
      <DialogSwitch/>
      </DialogProvider>
    </QuestionProvider>

  );
}

export default MainPage;
