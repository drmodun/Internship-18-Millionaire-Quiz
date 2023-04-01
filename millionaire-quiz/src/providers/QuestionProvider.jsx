import Question from "../components/Question";
import { chosenQuestions, questions, generateQuestions } from "../data";
import { createContext, useContext, useState } from "react";

generateQuestions();

const defaultContext = {
    questions: questions,
    chosenQuestions,
    currentQuestionIndex: 0,
    currentQuestion: null,
    updateCurrentQuestion: () => {},
    resetQuestions: () => {},
    finish: () => {},
    isFinished: false,
}

export const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(defaultContext.currentQuestionIndex);

    const [isFinished, setIsFinished] = useState(false);
    const [questions, setQuestions] = useState(defaultContext.questions);

    const [chosenQuestions, setChosenQuestions] = useState(defaultContext.chosenQuestions);
    const [currentQuestion, setCurrentQuestion] = useState(defaultContext.chosenQuestions[currentQuestionIndex]);

    const updateCurrentQuestion = () => {
        console.log("update");
        if (currentQuestionIndex < 14) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
        console.log(currentQuestionIndex, currentQuestion);
    }

    const resetQuestions = () => {
        console.log("reset");
        setIsFinished(false);
        
        setChosenQuestions(generateQuestions());
        setCurrentQuestionIndex(0);
        


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


