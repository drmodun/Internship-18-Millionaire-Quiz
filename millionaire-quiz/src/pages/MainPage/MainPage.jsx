import React from 'react';
import { questions } from '../../data.js';
import Question from '../../components/Question';
import  useQuestion, {QuestionProvider} from '../../providers/QuestionProvider';
import classes from './MainPage.module.css';
import { Board } from '../../components/Quiz/Board.jsx';
import { DialogProvider } from '../../providers/DialogProvider.jsx';
import { DialogSwitch } from '../../components/Dialogs/DialogSwitch.jsx';
function MainPage() {
  const { chosenQuestions, currentQuestionIndex, updateCurrentQuestion, resetQuestions } = useQuestion();

  const onSubmit = (isCorrect) => {
    if (isCorrect)
      updateCurrentQuestion();
    else
      resetQuestions();

  }

  return (
    <QuestionProvider>
      <DialogProvider>
      <div className="App">
        <h1>Millionaire Quiz</h1>ž
        <div className={classes.GameContainer}>
        <Question question={chosenQuestions[currentQuestionIndex]} onSubmit={onSubmit} />
        <Board currentQuestionIndex = {currentQuestionIndex}></Board>
        </div>
      </div>
      <DialogSwitch/>
      </DialogProvider>
    </QuestionProvider>

  );
}

export default MainPage;
