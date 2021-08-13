import React from "react";
import { getQuestion } from "../remote/questionApi";
import DifficultyButton from "./DifficultyButton";

const DifficultySelector:React.FC<unknown> = () => {
    
    const difficulties:string[] = ["Easy", "Medium", "Hard"];

    return(<div>
        {mapButtons(difficulties)}
    </div>)
}

const mapButtons = (difficulties: string[]) => (
    difficulties.map((difficultySetting: string) => (
        <DifficultyButton key={difficultySetting} difficulty={difficultySetting} bootstrapColor="primary" onClick = {() => getQuestion(difficultySetting)} />
    ))
)

export default DifficultySelector