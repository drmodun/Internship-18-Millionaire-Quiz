import useQuestion from "../../providers/QuestionProvider"
import Board from "../Board"
import Jokers from "../Joker";
import classes from "./Scoreboard.module.css"
export const Scoreboard = (props) => {
    const {currentQuestionIndex} = useQuestion();	
    const values = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];

    return (
        <div className={classes.Scoreboard}>
            <div className={classes.Jokers}>
            <Jokers fiftyFifty={props.fiftyFifty}></Jokers>
            </div>
            <div className = {classes.ScoreboardTitle}>Score: {currentQuestionIndex>0 ? values[currentQuestionIndex-1] : 0}$</div>
            <div className={classes.ScoreboardStandings}>
            <Board currentQuestionIndex={currentQuestionIndex}></Board>
            </div>
        </div>
    );


}
