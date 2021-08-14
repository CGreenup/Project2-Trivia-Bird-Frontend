import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestion } from "../remote/questionApi";

const GameUI:React.FC<unknown> = () => {
    const params:any  = useParams();
    const difficulty:string = params.difficulty

    let question;
    let questionData;

    const getData = async () => {
        let data:any = await getQuestion(difficulty);
        questionData = data;
        console.log(questionData);
        question = questionData.results[0].question;
        
        console.log("GameUI");
        console.log(questionData.results[0].question)
        console.log(question);
    }
    
    

    return (
        <div>
            <button onClick={() => getData()}>get this</button>
            <p>Quiz questions brought to you by Open Trivia Database by PIXELTAIL GAMES LLC</p>
        </div>
    )
}

export default GameUI