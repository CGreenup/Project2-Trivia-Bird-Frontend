import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestion } from "../remote/questionApi";

const GameUI:React.FC<unknown> = () => {
    const params:any  = useParams();
    const difficulty:string = params.difficulty

    const [questionString, setQuestion] = useState("");
    const [renders, setRenders] = useState(0);

    const getData = async () => {
        setRenders(renders + 1);
        let data:any = await getQuestion(difficulty);
        let questionData = data;
        console.log(questionData);
        let question:string = questionData.results[0].question;
        question = question.replaceAll("&#039;", "'");
        question = question.replaceAll("&quot;", '"');
        
        setQuestion(question);

        console.log("GameUI");
        console.log(questionData.results[0].question)
        console.log(question);
    }
    
    const getQuestionElement = () => {
        console.log("Getting question!")
        if(renders <= 0){
            getData();
            setRenders(renders + 1);
            setQuestion("Loading question...")
        }
        return (
            <div>
                Question: {questionString}
            </div>
        )
    }

    return (
        <div>
            {getQuestionElement()}
            <p>Quiz questions brought to you by Open Trivia Database by PIXELTAIL GAMES LLC</p>
        </div>
    )
}

export default GameUI