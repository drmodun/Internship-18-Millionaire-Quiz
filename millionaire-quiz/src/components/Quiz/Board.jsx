import classes from "./Board.module.css";

export const Board = (props) => {
    const values = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
    const colors = ["white", "orange", "orange", "orange", "white", "orange", "orange", "orange", "orange", "white", "orange", "orange", "orange", "orange", "white"];
    return (
        <div className={classes.Board}>
            <div className = {classes.BoardTitle}>Pitanje</div>
            {values.reverse().map((value, index) => (
                <div key={index} className={ 15-1-index === props.currentQuestionIndex ? classes.CurrentItem : classes.BoardItem} style={{ color: props.currentQuestionIndex===15-1-index ? "black" : colors[index] }}>
                    <span style={{width : "30px"}}>{15-index}</span><span className={classes.ItemText}>{"$" + " " + value}</span>
                </div>
            ))}
        </div>
    );
    
}