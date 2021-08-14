import React, { useState } from "react";
import { getQuestion } from "../remote/questionApi";
import DifficultyButton from "./DifficultyButton";

const DifficultySelector:React.FC<unknown> = () => {
    const [isDisabled, setDisabled] = useState(true)
    const [propValue, setValue] = useState("");
    const difficulties:string[] = ["Easy", "Medium", "Hard"];

    return(<div>
        {mapButtons(difficulties, isDisabled, setDisabled, setValue)}

        <button id = 'startTriviaBtn' className = 'btn btn-secondary btn-lg' disabled= {isDisabled}  value= {propValue}>  Get Trivia!  </button>
    </div>)
}

//Enable the Trivia Start button
//Set the value of that trivia button to whatever radio button is enabled
function enableStart(state: any, setDisabledCallback:(param:boolean) => void, difficulty:string,  value:string, setValueCallback:(value:string) => void){
    if(state){
          setDisabledCallback(false);
    }
    setValueCallback(value.toLowerCase());
    console.log(value);
}

//Put all of the difficulty buttons on screen using a map
const mapButtons = (difficulties: string[], state: any, callback:(value:boolean) => void , setValueCallback:(value:string) => void) => (
    difficulties.map((difficultySetting: string) => (
        <div style = {{margin: 12}} key={difficultySetting + "Div"} >
            <br></br>
            <DifficultyButton 
            key={difficultySetting} 
            difficulty={difficultySetting} 
            bootstrapColor={"info" }
            onChange = {() => enableStart(state, callback, difficultySetting, difficultySetting, setValueCallback)}
            />
            <br></br>
        </div>
    ))
)

// () => getQuestion(difficultySetting)

export default DifficultySelector