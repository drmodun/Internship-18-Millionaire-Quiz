import React from 'react';
import { questions } from '../../data.js';
import Question from '../../components/Question';
import  useQuestion, {QuestionProvider} from '../../providers/QuestionProvider';
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
      <div className="App">
        <h1>Millionaire Quiz</h1>
        <Question question={chosenQuestions[currentQuestionIndex]} onSubmit={onSubmit} />
      </div>
    </QuestionProvider>

  );
}

export default MainPage;
