import { chosenQuestions, questions, generateQuestions} from "../data";
import { Question } from "../models/Question";
import { createContext, useContext, useState} from "react";

const defaultContext = {
    questions: questions,
    chosenQuestions: chosenQuestions,
    currentQuestionIndex: 0,
    currentQuestion: chosenQuestions[0],
    updateCurrentQuestion: () => {},
    resetQuestions: () => {},
    finish : () => {},
    isFinished : false,
}

export const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({children}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [Questions, setChosenQuestions] = useState(Questions);
    const [currentQuestion, setCurrentQuestion] = useState(chosenQuestions[currentQuestionIndex]);

    const updateCurrentQuestion = () => {
        if (currentQuestionIndex < 14) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentQuestion(chosenQuestions[currentQuestionIndex + 1]);
        } else {
            setIsFinished(true);
        }
    }

    const resetQuestions = () => {
        setCurrentQuestionIndex(0);
        setCurrentQuestion(chosenQuestions[0]);
        setIsFinished(false);
        generateQuestions();


    }

    const finish = () => {
        setIsFinished(true);
        resetQuestions();
    }

    return (
        <QuestionContext.Provider value={{
            questions,
            chosenQuestions,
            currentQuestionIndex,
            currentQuestion,
            updateCurrentQuestion,
            resetQuestions,
            finish,
            isFinished,
        }}>
            {children}
        </QuestionContext.Provider>
    )
}
const useQuestion = () => useContext(QuestionContext);
export default useQuestion;


