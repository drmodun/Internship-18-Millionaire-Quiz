import Question from "../components/Question";
import { chosenQuestions, questions, generateQuestions } from "../data";
import { createContext, useContext, useState } from "react";

generateQuestions();

const defaultContext = {
    questions: questions,
    chosenQuestions,
    currentQuestionIndex: 0,
    currentQuestion: null,
    setCurrentQuestionIndex: () => {},
    updateJokersUsed: () => {},
    resetQuestions: () => {},
    finish: () => {},
    isFinished: false,
    isWon : false,
    jokersUsed: [0,0,0],
}

export const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(defaultContext.currentQuestionIndex);

    const [isFinished, setIsFinished] = useState(defaultContext.isFinished);
    const [questions, setQuestions] = useState(defaultContext.questions);

    const [isWon, setIsWon] = useState(defaultContext.isWon);

    const [jokersUsed, setJokersUsed] = useState(defaultContext.jokersUsed);

    const [chosenQuestions, setChosenQuestions] = useState(defaultContext.chosenQuestions);
    const [currentQuestion, setCurrentQuestion] = useState(defaultContext.chosenQuestions[currentQuestionIndex]);

    
    

    const updateJokersUsed = (index) => {
        let temp = jokersUsed;
        temp[index] = 1;
        setJokersUsed(temp);
        


    }

    const finish = () => {
        setJokersUsed([0,0,0]);
        setCurrentQuestionIndex(0);
        setChosenQuestions(generateQuestions());
    }


    return (
        <QuestionContext.Provider value={{
            questions,
            chosenQuestions,
            currentQuestionIndex,
            currentQuestion,
            setCurrentQuestionIndex,
            updateJokersUsed,
            finish,
            isFinished,
            jokersUsed,
        }}>
            {children}
        </QuestionContext.Provider>
    )
}
const useQuestion = () => useContext(QuestionContext);
export default useQuestion;


