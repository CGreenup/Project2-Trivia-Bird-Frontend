import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestion } from "../remote/questionApi";

const GameUI:React.FC<unknown> = () => {
    const params:any  = useParams();
    const difficulty:string = params.difficulty

    const [questionString, setQuestion] = useState("");
    const [renders, setRenders] = useState(0);

    useEffect( () => {
        getQuestionElement();
    }, [] )

    function replaceEncodedCharacters(input:string){
        let newString:string = input;
        
        newString = newString.replaceAll("&#039;", "'");
        newString = newString.replaceAll("&quot;", '"');
        newString = newString.replaceAll("&amp;", "&");

        return newString;
    }

    async function getData () {
        console.log("===============")
        console.log("In getData")
        console.log("getting question data")
        let data:any = await getQuestion(difficulty);
        console.log(data);
        let question:string = replaceEncodedCharacters(data.results[0].question);
        
        setQuestion(question);

        console.log(data.results[0].question)
        console.log(question);
    }
    
    const getQuestionElement = () => {
        console.log("Getting question element!")
        if(renders < 1){
            setRenders(renders + 1);
            console.log("Renders are less than 1, so I'm getting the data Renders:"+renders)
            getData();
            setQuestion("Loading question...")
        }
        return "Question:" +  questionString;
            
        
    }

    return (
        <div>
            <h2>{questionString}</h2>
            <p>Quiz questions brought to you by Open Trivia Database by PIXELTAIL GAMES LLC</p>
        </div>
    )
}

export default GameUI