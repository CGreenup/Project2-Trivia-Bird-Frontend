import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestion } from "../remote/questionApi";

const GameUI:React.FC<unknown> = () => {
    const params:any  = useParams();
    const difficulty:string = params.difficulty

    const [questionString, setQuestion] = useState("Loading Question...");
    const [answersArray, setAnswers] = useState(Array<string>());
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [renders, setRenders] = useState(0);

    useEffect( () => {
        getQuestionInformation();
    }, [] )

    function replaceEncodedCharacters(input:string){
        let newString:string = input;
        
        newString = newString.replaceAll("&#039;", "'");
        newString = newString.replaceAll("&quot;", '"');
        newString = newString.replaceAll("&amp;", "&");

        return newString;
    }

    async function getData () {
        console.log("===============");
        console.log("In getData");

        let data:any = await getQuestion(difficulty);
        console.log(data);

        let question:string = replaceEncodedCharacters(data.results[0].question);
        setQuestion(question);

        let answers:string[] = Array<string>();
        answers = [...data.results[0].incorrect_answers, data.results[0].correct_answer];
        answers.sort();
        setAnswers([...answers]);

        let correct_answer:string = data.results[0].correct_answer;

        setCorrectAnswer(correct_answer);

        console.log(data.results[0].question)
        // answersArray.map((ans:string) => {console.log(ans)} )
        console.log(question);
        console.log("===============");
    }
    
    const getQuestionInformation = () => {
        console.log("Getting question element!")
        if(renders < 1){
            setRenders(renders + 1);
            getData();
        }
    }

    function mapData(answers:string[]){
        return (
            <div className="row row-cols-2" style = {{margin:20}}>
                {answers.map( (answer:string) => {
                    return(<div className = "col py-1 px-1">
                        <button className = "btn btn-lg btn-outline-info form-control">
                            -
                            <br></br>
                            {answer}
                            <br></br>
                            -
                        </button>
                    </div>)
                })}
            </div>
        )
    }

    return (
        <div>
            <br/>
            <h2>{questionString}</h2>
            {mapData(answersArray)}
            <p>Quiz questions brought to you by <i>Open Trivia Database</i> by <b>PIXELTAIL GAMES LLC</b></p>
        </div>
    )
}

export default GameUI