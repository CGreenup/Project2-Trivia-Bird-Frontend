import React from "react";
import { getQuestion } from "../remote/questionApi";
import DifficultyButton from "./DifficultyButton";

const DifficultySelector:React.FC<unknown> = () => {
    
    const difficulties:string[] = ["Easy", "Medium", "Hard"];

    return(<div>
        <DifficultyButton difficulty='Easy' bootstrapColor='success' onClick = {() => {getQuestion('Hard')}}></DifficultyButton>
    </div>)
}

export default DifficultySelector