import { chosenQuestions, questions, generateQuestions } from "../data";
import { createContext, useContext, useState } from "react";

generateQuestions();

const defaultContext = {
    questions: questions,
    chosenQuestions,
    currentQuestionIndex: 0,
    setCurrentQuestionIndex: () => { },
    updateJokersUsed: () => { },
    resetQuestions: () => { },
    finish: () => { },
    jokersUsed: [0, 0, 0],
    isFrozen: false,
    setIsFrozen: () => { },
}

export const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(defaultContext.currentQuestionIndex);

    const [questions, setQuestions] = useState(defaultContext.questions);


    const [jokersUsed, setJokersUsed] = useState(defaultContext.jokersUsed);

    const [chosenQuestions, setChosenQuestions] = useState(defaultContext.chosenQuestions);

    const [isFrozen, setIsFrozen] = useState(defaultContext.isFrozen);

    const updateJokersUsed = (index) => {
        let temp = jokersUsed;
        temp[index] = 1;
        setJokersUsed(temp);
    }

    const toggleFrozen = () => {
        setIsFrozen(!isFrozen);
    }

    const finish = () => {
        setJokersUsed([0, 0, 0]);
        setCurrentQuestionIndex(0);
        setChosenQuestions(generateQuestions());
    }


    return (
        <QuestionContext.Provider value={{
            questions,
            chosenQuestions,
            currentQuestionIndex,
            setCurrentQuestionIndex,
            updateJokersUsed,
            finish,
            jokersUsed,
            isFrozen,
            toggleFrozen
        }}>
            {children}
        </QuestionContext.Provider>
    )
}
const useQuestion = () => useContext(QuestionContext);
export default useQuestion;


