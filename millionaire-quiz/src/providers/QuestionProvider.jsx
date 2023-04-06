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
    isFinished: false,
    jokersUsed: [0, 0, 0],
}

export const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(defaultContext.currentQuestionIndex);

    const [questions, setQuestions] = useState(defaultContext.questions);


    const [jokersUsed, setJokersUsed] = useState(defaultContext.jokersUsed);

    const [chosenQuestions, setChosenQuestions] = useState(defaultContext.chosenQuestions);




    const updateJokersUsed = (index) => {
        let temp = jokersUsed;
        temp[index] = 1;
        setJokersUsed(temp);



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
        }}>
            {children}
        </QuestionContext.Provider>
    )
}
const useQuestion = () => useContext(QuestionContext);
export default useQuestion;


