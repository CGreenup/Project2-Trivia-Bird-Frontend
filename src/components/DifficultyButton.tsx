import React, {useState } from "react";
import { useEffect } from "react";

type Props = {
    difficulty:string;
    bootstrapColor?:string;
    onClick?: () => void;
}

const DifficultyButton: React.FC<Props> = (props) => {
    const [difficultyText, setText] = useState<string>("");
    const [outlineColor, setColor] = useState<string>("");

    useEffect(() => {
            setText(props.difficulty);
            setColor(props.bootstrapColor || "primary");
        },
        [props.difficulty]
     );

    return (
        <div>
            <input type="radio" className="btn-check" name="options-outlined" id={difficultyText} autoComplete="off" value={difficultyText.toLowerCase()} onClick={props.onClick} />
            <label className={"btn btn-outline-"+outlineColor} htmlFor={difficultyText}> {difficultyText} </label>
        </div>
    )
}


export default DifficultyButton