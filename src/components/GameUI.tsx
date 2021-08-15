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
    const [submittedAnswer, setSubmit] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");

    useEffect( () => {
        getQuestionInformation();
    })

    function replaceEncodedCharacters(input:string):string{
        let newString:string = input;
        
        //I'm sure there's a regex for this, but I do not know it right now
        //This could be condensed onto one line, but I'm not a sadist. At least this is readable
        newString = newString.replaceAll("&#039;", "'");
        newString = newString.replaceAll("&quot;", '"');
        newString = newString.replaceAll("&amp;", "&");
        newString = newString.replaceAll("&deg;", "°")
        newString = newString.replaceAll("&ntilde;", "~")

        return newString;
    }

    //Get the question JSON and set the various states for later use.
    async function getData () {
        //Debug logging
        console.log("===============");
        console.log("In getData");

        //Get the JSON using the questionAPI and Axios
        let data:any = await getQuestion(difficulty);
        console.log(data);

        let question:string = replaceEncodedCharacters(data.results[0].question);
        setQuestion(question);

        let answers:string[] = Array<string>();
        answers = [...data.results[0].incorrect_answers, data.results[0].correct_answer];
        answers.sort();

        for(let i = 0; i < answers.length; i++){
            answers[i] = replaceEncodedCharacters(answers[i]);
        }

        setAnswers([...answers]);

        let correct_answer:string = replaceEncodedCharacters(data.results[0].correct_answer);

        setCorrectAnswer(correct_answer);

        console.log(data.results[0].question);
        // answersArray.map((ans:string) => {console.log(ans)} )
        console.log(question);
        console.log(correct_answer);
        console.log("===============");
    }
    
    const getQuestionInformation = () => {
        if(renders < 1){
            setRenders(renders + 1);
            getData();
        }
    }

    function mapButtonField(answers:string[]){
        return (
            (!submittedAnswer)?
            <div className="row row-cols-2" style = {{margin:20}}>
                {answers.map( (answer:string) => {
                    return(<div className = "col py-1 px-1">
                        <button className = "btn btn-lg btn-outline-info form-control" onClick = {() => submitAnswer(answer)}>
                            -
                            <br></br>
                            {answer}
                            <br></br>
                            -
                        </button>
                    </div>)
                })}
            </div> :
            <div>
                <p className= {"h2 container py-1 bg-" + ((userAnswer == correctAnswer)?'success text-white':'danger')} style={{borderRadius: 6}}>
                    ══════════
                    <br></br>
                    {(userAnswer == correctAnswer)?'Correct!':'Incorrect.'} {" The answer was "} {correctAnswer} 
                    <br></br>
                    ══════════»
                </p>
            </div>
        )
    }

    function submitAnswer(input:string){
        setSubmit(true);
        setUserAnswer(input);
    }

    return (
        <div>
            <br/>
            <h2>{questionString}</h2>
            {mapButtonField(answersArray)}
            <p>Quiz questions brought to you by <i>Open Trivia Database</i> by <b>PIXELTAIL GAMES LLC</b></p>
        </div>
    )
}

export default GameUI