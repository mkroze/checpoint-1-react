import React from "react";
import './answer.css';

const Answer = (props) => {
    let answer = Object
        .keys(props.answer)
        .map((qAnswer,i)=>(
            <li 
            className=  {
                props.clickedAnswer === qAnswer
                    ? 'correct' : ''
            }
            onClick={()=>props.checkAnswer(qAnswer)}
            key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ));
    return <ul 
            className="Answers" 
            disabled={props.clickedAnswer ? true : false}>
        {answer}
    </ul>;
}
export default Answer;