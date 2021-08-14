import React from "react";
import { useParams } from "react-router-dom";

const GameUI:React.FC<unknown> = () => {
    const params:any  = useParams();

    console.log(params);

    return (
        <div>
            <p>{params.difficulty}</p>
        </div>
    )
}

export default GameUI