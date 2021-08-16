import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { UserProfile } from "../models/UserProfile";
import DifficultyButton from "./DifficultyButton";

type Props = {
    userProfile?:UserProfile
}

const DifficultySelector:React.FC<Props> = (props) => {
    const [isDisabled, setDisabled] = useState(true)
    const [paramValue, setValue] = useState("");
    const [redirect, setRedirect] = useState(false);
    const difficulties:string[] = ["Easy", "Medium", "Hard"];

    //Enable the Trivia Start button if it is currently disabled,
    //Set the value of that trivia button to whatever radio button is enabled
    function enableStart(value:string){
        if(isDisabled){
            setDisabled(false);
        }
        setValue(value.toLowerCase());
        console.log(value);
    }

    //Put all of the difficulty buttons on screen using a map
    const mapButtons = (difficulties: string[]) => (
        difficulties.map((difficultySetting: string) => (
            <div style = {{margin: 12}} key={difficultySetting + "Div"} >
                <br></br>
                <DifficultyButton 
                key={difficultySetting} 
                difficulty={difficultySetting} 
                bootstrapColor={"info" }
                onChange = {() => enableStart(difficultySetting)}
                />
                <br></br>
            </div>
        ))
    )

    const renderRedirect = () => {
        if (redirect) {
          return <Redirect to={'/game/' + paramValue.toLowerCase()} />
        }
      }

    return(<div>
        {renderRedirect()}
        {mapButtons(difficulties)}
        <button id = 'startTriviaBtn' className = 'btn btn-secondary btn-lg' disabled= {isDisabled}  value= {paramValue} onClick={() => setRedirect(true)}>  Get Trivia!  </button>
    </div>)
}





// () => getQuestion(difficultySetting)

export default DifficultySelector